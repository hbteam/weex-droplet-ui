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
                    <text class="btn" @click="handleCancel('wxPopup')">取消</text>
                    <text class="btn" @click="handleFinish('wxPopup')">完成</text>
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
            <wx-field
                label="最喜欢的电影"
                labelPosition="top"
                placeholder="请选择电影"
                width="690px"
                :disabled="true"
                :hasArrow="true"
                @wxClick="visible=true"
                v-model="selectedData.name"
                height="200px">
            </wx-field>

            <wx-field
                label="通讯地址"
                labelPosition="top"
                placeholder="请选择地址"
                width="690px"
                :disabled="true"
                :hasArrow="true"
                @wxClick="visible3=true"
                v-model="address"
                height="200px">
            </wx-field>

            <wx-field
                label="年份"
                labelPosition="top"
                placeholder="请选择年"
                width="690px"
                :disabled="true"
                :hasArrow="true"
                @wxClick="visibleYears=true"
                v-model="selectedYear"
                height="200px">
            </wx-field>
        </div>
        <PickerDate></PickerDate>


        <wx-popup 
            :visible="visibleYears" 
            position="bottom" 
            :hasOverley="true"
            height="488px"
            ref="popupYears"
            @wxChange="showYears">
            <div>
                <div class="btn-wrap">
                    <text class="btn" @click="handleCancel('popupYears')">取消</text>
                    <text class="btn" @click="handleFinish('popupYears')">完成</text>
                </div>
                <wx-picker :data="years" :visible="visibleYears" @wxChange="changeYear"></wx-picker>
            </div>
        </wx-popup>


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
    import { WxPicker, WxButton, WxPopup, WxField } from '../../index';
    import { PICKER_DATA, YEARS } from './data';
    import { provins, citys, areas } from './address';
    import Picker3 from './picker-3.vue';
    import PickerDate from './picker-date.vue';
    export default {
        data () {
            return {
                data: PICKER_DATA,
                years: YEARS,
                visible: false,
                visible3: false,
                visibleYears: false,
                selectedData: PICKER_DATA.defaultValue,
                selectedYear: YEARS.defaultValue,
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

            handleCancel (ref) {
                this.$refs[ref].hide();
            },

            handleFinish (ref) {
                this.$refs[ref].hide();
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


            showYears (visible) {
                this.visibleYears = visible;
            },

            changeYear (data) {
                this.selectedYear = data;
            },

        },
        components: { 
            WxPicker, 
            WxButton, 
            WxPopup, 
            Picker3, 
            WxField, 
            PickerDate 
        }
    }
</script>
