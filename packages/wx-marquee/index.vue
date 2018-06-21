<template>
    <div class="wx-marquee">
        <text class="marquee" ref="marquee1">
          {{ '通知存款按照确定通知时间的不同，分为1天通知存款和7天通知存款两种类型A。' }}
        </text>
        <text class="marquee" ref="marquee2">
          {{ '通知存款按照确定通知时间的不同，分为1天通知存款和7天通知存款两种类型A。' }}
        </text>
    </div>
</template>
<style>
    .wx-marquee {
        /*width: 750px;*/
        /*height: 100px;*/
        flex-direction: row;
        background-color: #fff;
    }

    .marquee {
    }

</style>
<script type="text/javascript">
    const animation = weex.requireModule('animation');
    const dom = weex.requireModule('dom')

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
            }
        },

        created () {

        },

        mounted () {
            this.start(1180, 'marquee1', 5000);

            setTimeout(()=> {
                this.start(2360, 'marquee2', 10000, true)
            }, 0);
        },
        
        methods: {
            start (w, ref, t, b) {
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: {
                        transform: `translateX(-${w}px)`
                    },
                    duration: t,
                    timingFunction: 'linear',
                }, () => {
                    if (b) {
                      // this.end();
                      // this.end();
                    }
                });
            },

            end (ref) {
                let el = this.$refs[ref];
                animation.transition(el, {
                    styles: {
                        transform: ``
                    },
                    duration: 0,
                    timingFunction: 'linear',
                });
                setTimeout(()=> {
                    this.start()
                });
            },
        },
        watch: {
            
        }
    }
</script>