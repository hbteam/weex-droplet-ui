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

        <wx-button 
            height="80px"
            width="450px"
            borderRadius="200px"
            textColor="#fff"
            textFontSize="32px"
            @wxClick="visible=true">点击选择</wx-button>
        <text style="font-size:32px;">选中的值为：{{ selectedData.name }}</text>

        <wx-button 
            height="80px"
            width="450px"
            borderRadius="200px"
            textColor="#fff"
            textFontSize="32px"
            @wxClick="visible3=true">地址选择</wx-button>
        <text style="font-size:32px;">选中地址值为：{{ address }}</text>
    </div>
</template>
<style scoped>
    .wx-demo {

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
                this.selectedData = {};
                this.$refs.wxPopup.hide();
                PICKER_DATA.defaultValue = {};
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
                this.address = '';
            },
        },
        components: { WxPicker, WxButton, WxPopup, Picker3 }
    }
</script>
