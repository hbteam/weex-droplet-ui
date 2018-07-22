<template>
    <div class="wx-marquee" ref="wxMarquee" :style="baseStyle">
        <div class="wrap" v-if="direction === 'row'" :style="baseStyle">
            <div class="marquee1" ref="marquee1" :style="marquee1">
                <text :style="textStyle" class="wx-text">{{ text }}</text>
            </div>
            <div class="marquee2" ref="marquee2" :style="marquee2">
                <text :style="textStyle"class="wx-text">{{ text }}</text>
            </div>
        </div>
    </div>
</template>
<style>
    .wx-marquee {
        width: 750px;
        overflow: hidden;
    }

    .wrap {
        width: 750px;
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
                required: true,
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
                type: String
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
                default: 2000
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
            
        },

        mounted () {
            this.initStyle();
            if (this.base.x > 750) {
                this.start('marquee1');
            }
        },
        
        methods: {
            initStyle () {
                this.baseStyle = { height: this.height, 'background-color': this.bgColor };
                this.textStyle = { 'font-size': this.fontSize, 'color': this.textColor };
                let base = {height: this.height,width: this.width};
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

            start (ref) {
                setTimeout(() => {
                    this.animation1('marquee1');
                    this.animation2('marquee2');
                }, this.delay);
            },

            animation1 (ref) {
                let el = this.$refs[ref];
                let styles = this.$data.$env.isWeb ? {
                        left: `-${this.base.x}px`,
                    } : {
                        transform: `translateX(-${this.base.x}px)`,
                    }
                animation.transition(el, {
                    styles: styles,
                    duration: this.base.t,
                    timingFunction: 'linear',
                }, () => {
                    this.end(ref);
                });
            },

            animation2 (ref) {
                let el = this.$refs[ref];
                let x = this.base.x;
                let d = this.base.t * 2;
                let styles = this.$data.$env.isWeb ? {
                        left: `-${x}px`,
                    } : {
                        transform: `translateX(-${x}px)`,
                    }
                animation.transition(el, {
                    styles: styles,
                    duration: d,
                    timingFunction: 'linear',
                }, () => {
                    this.end(ref);
                });
            },

            end (ref) {
                let el = this.$refs[ref];
                let styles = this.$data.$env.isWeb ? {
                        left: `${this.base.x}px`,
                    } : {
                        transform: `translateX(${this.base.x}px)`,
                    }
                animation.transition(el, {
                    styles: styles,
                    duration: 0,
                });
                setTimeout(() => {
                    this.animation2(ref);
                }, 20);
            },
        }
    }
</script>