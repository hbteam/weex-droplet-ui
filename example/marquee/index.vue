<template>
    <div class="wx-demo">
        <wx-marquee :text="text" bgColor="red" :duration="5000"></wx-marquee>
    </div>
</template>

<style type="text/css">
    .wx-demo {
        margin-top: 100px;
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
                text: '通知存款按照确定通知时间的不同，分为1天通知存款和7天通知存款两种类型A  '
            }
        },
        methods: {

        }
    }
</script>
