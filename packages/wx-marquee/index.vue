<template>
    <div class="wx-marquee" ref="wxMarquee" :style="baseStyle">
        <div class="wrap" v-if="direction === 'row'" :style="baseStyle">
            <div class="marquee1" ref="marquee1" :style="marquee1">
                <text :style="textStyle" class="wx-text">{{ text }}</text>
            </div>
            <div class="marquee2" ref="marquee2" :style="marquee2">
                <text :style="textStyle" class="wx-text">{{ text }}</text>
            </div>
        </div>
        <div class="wrap-column" ref="wrapColumn" v-if="direction === 'column'" :style="baseStyle">
            <div :style="baseStyle" class="wrap-column-text" v-for="txt in text">
                <text class="text-item" :style="textStyle">{{ txt }}</text>
            </div>
            <div :style="baseStyle" class="wrap-column-text">
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

    .wrap-column {
    }

    .wrap-column-text {
        justify-content: center;
        align-items: center;
        overflow: hidden;
        flex-direction: row;
    }
    .text-item {
        lines: 1;
        width: 750px;
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
                    x: Number(this.width.replace('px','')),
                    t: this.duration,
                },
                marquee1: {},
                marquee2: {},
                baseStyle: {},
                textStyle: {},
            }
        },

        created () {
            this.baseStyle = { width: this.width, height: this.height, 'background-color': this.bgColor };
            let textStyle = { width: this.width, 'font-size': this.fontSize, 'color': this.textColor };
            if (this.$data.$env.isWeb) {
                textStyle.display = 'block';
            }
            this.textStyle = textStyle;
        },

        mounted () {
            if (this.direction === 'row' && this.base.x > 750) {
                this.initStyle();
                this.startRow('marquee1');
            } else if (this.direction === 'column') {
                this.startCol();
            }
        },
        
        methods: {
            initStyle () {
                let base = {height: this.height, width: this.width};
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

            startRow (ref) {
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
                    this.animationCol(this.duration, `${-1 * index * 100}%`);
                  }
                  setTimeout(next, d);
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