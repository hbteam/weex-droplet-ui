<template>
    <div class="wx-demo">
        <wx-popup 
            :visible="visible" 
            position="bottom" 
            :hasOverley="true"
            height="488px"
            ref="wxPopup"
            @wxChange="handleBottom">
            <div>
                <div class="btn-wrap">
                    <text class="btn" @click="handleCancel">取消</text>
                    <text class="btn" @click="handleFinish">完成</text>
                </div>
                <wx-picker :data="data" :visible="visible" @wxChange="handleChange"></wx-picker>
            </div>
        </wx-popup>

        <Picker3
            :defaultValue="defaultAddress"
            :visible="visible3"
            @wxCancel="cancelAddressPicker"
            @wxConfirm="confirmAddressPicker"
            @wxChange="handleChangeAddress">
        </Picker3>

        <div class="wrap">
            <wx-button 
                height="80px"
                width="690px"
                class="button"
                textColor="#fff"
                textFontSize="32px"
                @wxClick="visible=true">点击选择</wx-button>
            <text style="font-size:32px;">{{ selectedData.name }}</text>

            <wx-button 
                height="80px"
                width="690px"
                class="button"
                textColor="#fff"
                textFontSize="32px"
                @wxClick="visible3=true">地址选择</wx-button>
            <text style="font-size:32px;">{{ address }}</text>
        </div>
    </div>
</template>
<style scoped>
    .wx-demo {
    }

    .wrap {
        flex-direction: column;
        align-items: center;
    }

    .button {
        margin-top: 60px;
    }

    .btn-wrap {
        background-color: #ccc;
        height: 88px;
        font-size: 38px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .btn {
        line-height: 88px;
        height: 88px;
        width: 100px;
        text-align: center;
        color: #007aff;
        font-size: 32px;
    }
</style>
<script>
    import { WxPicker, WxButton, WxPopup } from '../../index';
    import { PICKER_DATA } from './data';
    import { provins, citys, areas } from './address';
    import Picker3 from './picker-3.vue';

    export default {
        data () {
            return {
                data: PICKER_DATA,
                visible: false,
                visible3: false,
                selectedData: PICKER_DATA.defaultValue,
                address: '',
                defaultAddress: ['湖南省','长沙市','开福区'],
            }
        },

        created () {
            this.address = this.defaultAddress.join('/')
        },

        methods: {
            handleBottom (visible) {
                this.visible = visible;
            },

            handleChange (data) {
                this.selectedData = data;
            },

            handleCancel () {
                this.$refs.wxPopup.hide();
            },

            handleFinish () {
                this.$refs.wxPopup.hide();
            },

            handleChangeAddress (address) {
                this.address = address.join('/');
            },

            confirmAddressPicker (address) {
                this.visible3= false;
                this.address = address.join('/');
            },

            cancelAddressPicker () {
                this.visible3 = false;
            },
        },
        components: { WxPicker, WxButton, WxPopup, Picker3 }
    }
</script>
