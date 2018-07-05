<template>
    <div class="wx-marquee" ref="wxMarquee" @click="init">
        <text class="marquee" ref="marquee1">{{ 'A知存款按照确定通知时间的不同，分为1天通知存款和7天通知存款两种类型A。' }}</text>
        <text class="marquee" ref="marquee2">{{ 'B知存款按照确定通知时间的不同，分为1天通知存款和7天通知存款两种类型B。' }}</text>
    </div>
</template>
<style>
    .wx-marquee {
        width: 750px;
        flex-direction: row;
        background-color: red;
        overflow: hidden;
    }

    .marquee {
        /*width: 1180px;*/
        /*white-space:nowrap;*/
        /*height: 100px;*/
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
                datatext: [],
                time: 0,
                base:{ 
                    x: 1180, 
                    t: 5000 
                }
            }
        },

        created () {

        },

        mounted () {
            let v = 1180 / 5000;
            let c = 1180 % 750;
            let r = Math.floor(1180 / 750);
            // 滚动一屏需要的时间
            let t = v * 750;
            this.init();
        },
        
        methods: {
            init () {
                this.end('marquee2')
                this.start(this.base.x, 'marquee1', this.base.t);
                this.es('marquee2');
            },

            es (ref) {
                setTimeout(() => {
                    let c2 = (1180 * 2) * (5000 / 1180);
                    this.start(1180 * 2, ref, c2);
                },10);
            },

            start (w, ref, t) {
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: {
                        transform: `translateX(-${w}px)`
                    },
                    duration: t,
                    timingFunction: 'linear',
                }, () => {
                    this.end(ref);
                    this.es(ref)
                });
            },

            end (ref) {
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: {
                        transform: `translateX(750px)`
                    },
                    duration: 0,
                });
            },
        },
        watch: {
            
        }
    }
</script>