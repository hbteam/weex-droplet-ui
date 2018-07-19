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
        overflow: hidden;
    }

    .wrap {
        overflow: hidden;
        position: relative;
    }

    .marquee1 {
        position: absolute;
        transform: translateX(0px);
        flex-direction: row;
        align-items: center;
    }

    .marquee2 {
        position: absolute;
        transform: translateX(1180px);
        flex-direction: row;
        align-items: center;
    }

</style>
<script type="text/javascript">
    const animation = weex.requireModule('animation');
    const dom = weex.requireModule('dom');

    export default {
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
                default: 5000
            },
        },
        data () {
            return {
                base:{ 
                    x: 0, 
                    t: 0 
                },
                marquee1: {width: this.width, height: this.height},
                marquee2: {width: this.width, height: this.height},
                baseStyle: {},
            }
        },

        created () {
            const fz = Number(this.fontSize.replace('px',''));
            this.base.x = fz * this.text.length;
            this.base.t = this.duration;
            this.baseStyle = { width: this.width, height: this.height, 'background-color': this.bgColor };
            this.textStyle = { 'font-size': this.fontSize, 'color': this.textColor };
        },

        mounted () {
            if (this.base.x > 750) {
                this.start('marquee1');
            }
        },
        
        methods: {
            start (ref) {
                setTimeout(() => {
                    this.animation1('marquee1');
                    this.animation2('marquee2');
                }, 2000);
            },

            animation1 (ref) {
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: {
                        transform: `translateX(-${this.base.x}px)`
                    },
                    duration: this.base.t,
                    timingFunction: 'linear',
                }, () => {
                    this.end(ref);
                    setTimeout(() => {
                        this.animation2(ref);
                    }, 10);
                });
            },

            animation2 (ref) {
                let el = this.$refs[ref];
                let x = this.base.x;
                let d = this.base.t * 2;
                animation.transition(el, {
                    styles: {
                        transform: `translateX(-${x}px)`
                    },
                    duration: d,
                    timingFunction: 'linear',
                }, () => {
                    this.end(ref);
                    setTimeout(() => {
                        this.animation2(ref);
                    }, 10);
                });
            },

            end (ref) {
                this[ref] = {
                    transform: `translateX(${this.base.x}px)`,
                    width: this.width,
                    height: this.height
                }
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: {
                        transform: `translateX(${this.base.x}px)`
                    },
                    duration: 0,
                });
            },
        }
    }
</script>