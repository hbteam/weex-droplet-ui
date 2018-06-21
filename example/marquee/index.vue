<template>
    <div class="wx-demo">
        <wx-marquee text="通知存款按照确定通知时间的不同，分为1天通知存款和7天通知存款两种类型A。">
        </wx-marquee>
    </div>
</template>

<style type="text/css">
    .wx-demo {
        margin-top: 100px;
        overflow: hidden;
        background-color: #fff;
    }
</style>

<script>
    import { WxMarquee } from '../../index';

    export default {
        components: {
            WxMarquee
        },
        data () {
            return {
                visible: false
            }
        },
        methods: {
            openLoading () {
               
            }
        }
    }
</script>
