<template>
    <div class="wx-marquee" ref="wxMarquee">
        <div class="marquee1" ref="marquee1" :style="marquee1">
            <text class="wx-text">{{ 'A知存款按照确定通知时间的不同，分为1天通知存款和7天通知存款两种类型A。。' }}</text>
        </div>
        <div class="marquee2" ref="marquee2" :style="marquee2">
            <text class="wx-text">{{ 'B知存款按照确定通知时间的不同，分为1天通知存款和7天通知存款两种类型B。。' }}</text>
        </div>
    </div>
</template>
<style>
    .wx-marquee {
        width: 750px;
        height: 100px;
        background-color: red;
        overflow: hidden;
        position: relative;
    }

    .marquee1 {
        position: absolute;
        transform: translateX(0px);
        flex-direction: row;
        height: 100px;
        align-items: center;
    }

    .marquee2 {
        position: absolute;
        transform: translateX(1180px);
        flex-direction: row;
        height: 100px;
        align-items: center;
    }

</style>
<script type="text/javascript">
    const animation = weex.requireModule('animation');
    const dom = weex.requireModule('dom')
    const modal = weex.requireModule('modal')

    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            direction: {
                type: String,
                default: 'row'
            },
            type: {
                type: String,
            },
            text: {
                type: String
            },
        },
        data () {
            return {
                base:{ 
                    x: 1180, 
                    t: 5000 
                },
                marquee1: {},
                marquee2: {},
            }
        },

        mounted () {
            this.start('marquee1');
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
                    transform: 'translateX(1180px)',
                }
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: {
                        transform: `translateX(1180px)`
                    },
                    duration: 0,
                });
            },
        }
    }
</script>