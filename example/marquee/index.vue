<template>
    <div class="wx-demo">
        <wx-marquee 
            width="1450px" 
            :text="text" 
            bgColor="#4676FF" 
            textColor="#fff" 
            :duration="8000"
            :delay="2000">
        </wx-marquee>
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
                text: '我要这天再遮不住我眼，我要这地再埋不了我心，我要这众生都明白我意，我要这诸佛都烟消云散！'
            }
        },
        methods: {

        }
    }
</script>
