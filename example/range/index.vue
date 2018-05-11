<template>
    <div class="wx-demo">
        <wx-range 
            ref="range"
            width="400px"
            :innerStyle="{'background-color': '#a9acb1'}"
            :outerStyle="{'background-color': '#1890ff'}"
            v-model="range"
            @wxChange="handleChange">
        </wx-range>
        <text style="margin-top:100px;font-size: 32px;">{{ range }}</text>
        <wx-button class="button" @wxClick="setRange()">设置进度50%</wx-button>
        
         <text style="margin-top:100px;"></text>
        <wx-range 
            width="450px"
            height="4px"
            v-model="range2"
            :circleStyle="{'background-color': '#f1f1f1', 'width': '50px', 'height': '50px'}"
            :innerStyle="{'background-color': '#f5222d'}"
            @wxChange="handleChange2">
        </wx-range>
        <text style="margin-top:100px;font-size: 32px;">{{ range2 }}</text>
    </div>
</template>
<style type="text/css">
    .wx-demo {
        padding-top: 100px;
        align-items: center;
        background-color: #fff;
    }
    .button {
        margin-top: 100px;
        margin-left: 50px;
    }
</style>
<script>
    import { WxRange, WxButton } from '../../index';

    export default {
        components: {
            WxRange,
            WxButton
        },
        data () {
            return {
                range: 0,
                range2: 0,
            }
        },
        created () {

        },
        methods: {
            handleChange (range) {
                this.range = range;
            },

            handleChange2 (range2) {
                this.range2 = range2;
            },

            setRange () {
                this.$refs.range.setRange(50);
            },
        }
    }
</script>
