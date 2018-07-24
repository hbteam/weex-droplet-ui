<template>
    <div class="wx-marquee" ref="wxMarquee" :style="wrapStyle">
        <div class="wrap" v-if="direction === 'row'" :style="baseStyle">
            <div class="marquee1" ref="marquee1" :style="marquee1">
                <text :style="textStyle" class="wx-text">{{ text }}</text>
            </div>
            <div class="marquee2" ref="marquee2" :style="marquee2">
                <text :style="textStyle" class="wx-text">{{ text }}</text>
            </div>
        </div>
        <div v-if="direction === 'column'" :style="baseStyle">
            <div ref="wrapColumn" :style="baseStyleWrap">
                <text v-for="txt in text" class="text-item" :style="textStyle">{{ txt }}</text>
                <text class="text-item" :style="textStyle">{{ this.text[0] }}</text>
            </div>
        </div>
    </div>
</template>
<style>
    .wx-marquee {
        overflow: hidden;
    }

    .wrap {
        overflow: hidden;
        position: relative;
    }

    .marquee1 {
        position: absolute;
        flex-direction: row;
        align-items: center;
    }

    .marquee2 {
        position: absolute;
        flex-direction: row;
        align-items: center;
    }

    .text-item {
        lines: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

</style>
<script type="text/javascript">
    const animation = weex.requireModule('animation');
    const dom = weex.requireModule('dom');
    import mixins from '../utils/mixins';

    export default {
        mixins:[mixins],
        props: {
            width: {
                type: String,
                default: '750px'
            },
            textWidth: {
                type: String,
                default: '750px'
            },
            
            height: {
                type: String,
                default: '80px'
            },
            direction: {
                type: String,
                // or column
                default: 'row'
            },
            text: {
                type: [String, Array]
            },
            fontSize: {
                type: String,
                default: '32px'
            },
            textColor: {
                type: String,
                default: '#333'
            },
            bgColor: {
                type: String,
                default: '#fff'
            },
            duration: {
                type: Number,
                // ms
                default: 5000
            },
            delay: {
                type: Number,
                // ms
                default: 0
            },
        },
        data () {
            return {
                base:{ 
                    x: Number(this.textWidth.replace('px','')),
                    t: this.duration,
                    h: Number(this.height.replace('px',''))
                },
                marquee1: {},
                marquee2: {},
                wrapStyle: {},
                baseStyle: {},
                textStyle: {},
            }
        },

        created () {
            this.wrapStyle = { width: this.width, height: this.height, 'background-color': this.bgColor };
            let width = this.direction === 'row' ? this.textWidth : this.width;
            this.baseStyle = { width: width, height: this.height, 'background-color': this.bgColor };

            this.baseStyleWrap = Object.assign({}, this.baseStyle, {
                height: this.base.h * (this.text.length + 1) + 'px'});

            let textStyle = { height: this.height, width: width, 'font-size': this.fontSize, 'color': this.textColor, 'line-height': this.height };

            if (this.$data.$env.isWeb) textStyle.display = 'block';
            this.textStyle = textStyle;
        },

        mounted () {
            if (this.direction === 'row' && this.base.x > 750) {
                this.initStyle();
                this.startRow();
            } else if (this.direction === 'column') {
                this.startCol();
            }
        },
        
        methods: {
            initStyle () {
                let base = {height: this.height, width: this.textWidth};
                if (this.$data.$env.isWeb) {
                    this.marquee1 = Object.assign({
                        left: '0px'
                    }, base);
                    this.marquee2 = Object.assign({
                        left: `${this.base.x}px`
                    }, base);
                } else {
                    this.marquee1 = Object.assign({
                        transform: `translateX(0px)`
                    }, base);
                    this.marquee2 = Object.assign({
                        transform: `translateX(${this.base.x}px)`
                    }, base);
                }
            },

            startRow () {
                setTimeout(() => {
                    this.animation1('marquee1');
                    this.animation2('marquee2');
                }, this.delay);
            },

            startCol () {
                let index = 0;
                let d = this.duration;
                let next = () => {
                  if (index > this.text.length - 1) {
                    index = d = 0;
                    this.animationCol(0, 0);
                  } else {
                    d = this.duration;
                    index ++;
                    let y = `${-1 * index * 100 / (this.text.length + 1)}%`;
                    this.animationCol(this.duration, y);
                  }
                  // 在动画结束后延迟100ms执行，解决莫名其妙的兼容性bug
                  setTimeout(next, d + 100);
                }
                setTimeout(() => {
                    next();
                }, this.delay);
            },

            animation1 (ref) {
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: this.getStyles(-this.base.x),
                    duration: this.base.t,
                    timingFunction: 'linear',
                }, () => {
                    this.end(ref);
                });
            },

            getStyles (x) {
                if (this.$data.$env.isWeb) {
                    return {left: `${x}px`};
                } else {
                    return {transform: `translateX(${x}px)`};
                }
            },

            animation2 (ref) {
                let el = this.$refs[ref];
                let x = this.base.x;
                let d = this.base.t * 2;
                animation.transition(el, {
                    styles: this.getStyles(-x),
                    duration: d,
                    timingFunction: 'linear',
                }, () => {
                    this.end(ref);
                });
            },

            end (ref) {
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: this.getStyles(this.base.x),
                    duration: 0,
                });
                setTimeout(() => {
                    this.animation2(ref);
                }, 20);
            },

            animationCol (duration, y) {
                var el = this.$refs.wrapColumn;
                if (this.$data.$env.isWeb) {
                    el.style.transitionDuration = duration + 'ms';
                    el.style.transitionTimingFunction = 'ease';
                    el.style.transform = `translate3d(0, ${y}, 0)`
                    return;
                }
                animation.transition(el, {
                    styles: {
                        transform: `translateY(${y})`
                    },
                    duration: duration,
                    timingFunction: 'ease'
                });
            },
        }
    }
</script>