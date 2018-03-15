<template>
    <div class="wx-demo">
        <wx-button class="button" @wxClick="visibleRight = true">right</wx-button>
        <wx-button class="button" @wxClick="visibleLeft = true">left</wx-button>
        <wx-button class="button" @wxClick="visibleTop = true">top</wx-button>
        <wx-button class="button" @wxClick="visibleBottom = true">bottom</wx-button>
        <wx-popup 
            :visible="visibleRight" 
            position="right" 
            width="750px" 
            height="780px"
            :duration="300"
            :hasOverley="true"
            ref="wxPopup"
            @wxChange="handleRight">
            <div class="cells">
                <wx-field
                    label="银行卡号"
                    placeholder="请输入"
                    type="tel"
                    labelPosition="top"
                    width="650px"
                    height="200px"
                    :hasArrow="false"></wx-field>
                <wx-field
                    label="请再次确认银行卡号"
                    placeholder="请输入"
                    type="tel"
                    labelPosition="top"
                    width="650px"
                    height="200px"></wx-field>
                <wx-field
                    label="请输入身份证号"
                    placeholder="请选择"
                    :disabled="false"
                    labelPosition="top"
                    width="650px"
                    height="200px"
                    :hasArrow="false"></wx-field>
                <wx-button 
                    :styles="{'margin-top': '20px'}"
                    @wxClick="handleConfirm">确定</wx-button>
            </div>
        </wx-popup>

        <wx-popup 
            :visible="visibleLeft" 
            position="left" 
            @wxChange="handleLeft">
        </wx-popup>

        <wx-popup 
            :visible="visibleTop" 
            position="top" 
            @wxChange="handleTop">
        </wx-popup>

        <wx-popup 
            :visible="visibleBottom" 
            position="bottom" 
            @wxChange="handleBottom">
        </wx-popup>
    </div>
</template>
<style type="text/css">
    .button {
        margin-top: 100px;
        margin-left: 50px;
    }
    .cells {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import { WxPopup, WxButton, WxField } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        components: {
            WxPopup,
            WxButton,
            WxField,
        },
        data () {
            return {
                visibleRight: false,
                visibleLeft: false,
                visibleTop: false,
                visibleBottom: false,
            }
        },
        created () {

        },
        methods: {
            handleRight (visible) {
                this.visibleRight = visible;
            },

            handleLeft (visible) {
                this.visibleLeft = visible;
            },

            handleTop (visible) {
                this.visibleTop = visible;
            },

            handleBottom (visible) {
                this.visibleBottom = visible;
            },

            handleConfirm () {
                this.$refs.wxPopup.hide();
            },
        }
    }
</script>
