<template>
    <div class="wx-demo">
        <wx-marquee 
            width="1420px" 
            :text="text" 
            bgColor="#4676FF" 
            textColor="#fff" 
            :duration="8000"
            :delay="2000">
        </wx-marquee>

        <div class="wrap">
            <wx-marquee 
                class="marquee"
                width="1420px" 
                :text="text" 
                bgColor="#fff" 
                textColor="#333" 
                :duration="8000"
                :delay="2000">
            </wx-marquee>
            <div class="icon">
                <wx-icon name="search" :styles="iconSearchStyle"></wx-icon>
            </div>
        </div>

        <wx-marquee 
            height="60px"
            :text="textArray"
            direction="column" 
            bgColor="#4676FF" 
            textColor="#fff" 
            :duration="1000"
            :delay="4000">
        </wx-marquee>
    </div>
</template>

<style type="text/css" scoped>
    .wx-demo {
        margin-top: 100px;
        background-color: #fff;
    }

    .wrap {
        position: relative;
        height: 82px;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #DCDCDC;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .marquee {
        position: absolute;
        left: 60px;
    }

    .icon {
        position: absolute;
        left: 0;
        top: 0;
        background-color: #fff;
        width: 60px;
        height: 80px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

</style>

<script>
    import { WxMarquee, WxIcon } from '../../index';

    export default {
        components: {
            WxMarquee,
            WxIcon
        },
        data () {
            return {
                text: '我要这天再遮不住我眼，我要这地再埋不了我心，我要这众生都明白我意，我要这诸佛都烟消云散！',
                iconSearchStyle: {
                    'font-size': '32px',
                    'color': '#ccc',
                    'height': '34px',
                    'width': '44px',
                    'margin-left': '10px',
                },
                textArray: ['1.我要这天再遮不住我眼我要这天再遮不住我眼我要这天再遮不住我眼我要这天再遮不住我眼', '2.我要这地再埋不了我心', '3.我要这众生都明白我意', '4.我要这诸佛都烟消云散']
            }
        },
        methods: {

        }
    }
</script>
