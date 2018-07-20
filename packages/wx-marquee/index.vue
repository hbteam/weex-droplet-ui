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
        width: 1450px;
        /*flex-direction: row;*/
        /*align-items: center;*/
        white-space: nowrap;
    }

    .marquee2 {
        width: 1450px;
        position: absolute;
        white-space: nowrap;
        /*flex-direction: row;*/
        /*align-items: center;*/
    }

</style>
<script type="text/javascript">
    const animation = weex.requireModule('animation');
    const dom = weex.requireModule('dom');

    export default {
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
                marquee1: {width: this.width, height: this.height},
                marquee2: {width: this.width, height: this.height},
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
                this.marquee1 = {
                    // transform: `translateX(0px)`,
                    height: this.height,
                    left: '0px',
                };
                this.marquee2 = {
                    // transform: `translateX(${this.base.x}px)`,
                    height: this.height,
                    left: `${this.base.x}px`
                };
            },

            start (ref) {
                setTimeout(() => {
                    this.animation1('marquee1');
                    this.animation2('marquee2');
                }, this.delay);
            },

            animation1 (ref) {
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: {
                        left: `-${this.base.x}px`
                    },
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
                animation.transition(el, {
                    styles: {
                        left: `-${x}px`
                    },
                    duration: d,
                    timingFunction: 'linear',
                }, () => {
                    this.end(ref);
                });
            },

            end (ref) {
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: {
                        left: `${this.base.x}px`
                    },
                    duration: 0,
                });
                setTimeout(() => {
                    this.animation2(ref);
                }, 20);
            },
        }
    }
</script>