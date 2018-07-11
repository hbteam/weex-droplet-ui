<template>
    <div class="wx-demo">
        <wx-field
            label="日期"
            labelPosition="top"
            placeholder="请选择日期"
            width="690px"
            class="field"
            :disabled="true"
            :hasArrow="true"
            @wxClick="visibleDate=true"
            v-model="selectedDateStr"
            height="200px">
        </wx-field>

        <wx-popup 
            :visible="visibleDate" 
            position="bottom" 
            :hasOverley="true"
            height="488px"
            ref="popupDate"
            @wxChange="showYears">
            <div>
                <div class="btn-wrap">
                    <text class="btn" @click="handleCancel('popupDate')">取消</text>
                    <text class="btn" @click="handleFinish('popupDate')">完成</text>
                </div>
                <div class="flex">
                    <wx-picker :data="years" :visible="visibleDate" @wxChange="changeYear" class="flex-1"></wx-picker>
                    <wx-picker :data="months" :visible="visibleDate" @wxChange="changeMonth" class="flex-1"></wx-picker>
                    <wx-picker :data="days" :visible="visibleDate" @wxChange="changeDay" class="flex-1"></wx-picker>
                </div>
            </div>
        </wx-popup>
    </div>
</template>
<style scoped>
    .wx-demo {
    }

    .field {
        margin-left: 30px;
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

    .flex {
        flex-direction: row;
    }

    .flex-1 {
        flex: 1;
    }
</style>
<script>
    import { WxPicker, WxButton, WxPopup, WxField } from '../../index';
    import { YEARS, MONTHS, getDays, getMaxDay } from './data';
    export default {
        data () {
            return {
                years: YEARS,
                months: MONTHS,
                days: getDays(),
                visibleDate: false,
                selectedDate: [],
                selectedDateStr: [],

            }
        },

        created () {
            this.selectedDate = [YEARS.defaultValue, MONTHS.defaultValue, this.days.defaultValue];
            this.formate();
        },

        methods: {
            handleCancel (ref) {
                this.$refs[ref].hide();
            },

            handleFinish (ref) {
                this.$refs[ref].hide();
            },

            showYears (visible) {
                this.visibleDate = visible;
            },

            changeYear (y) {
                this.selectedDate[0] = y;
                this.formate();
            },

            changeMonth (m) {
                this.selectedDate[1] = m;
                let currentMonth = new Date().getMonth() + 1;
                let selectedDay = this.selectedDate[2];
                let maxDay = getMaxDay(this.selectedDate[0], m);
                let d = selectedDay;
                if (selectedDay > maxDay) {
                    d = maxDay;
                    this.selectedDate[2] = d;
                }
                this.days = getDays(this.selectedDate[0], m, d);
                this.formate();
            },

            changeDay (d) {
                this.selectedDate[2] = d;
                this.formate();
            },

            formate () {
                this.selectedDateStr = this.selectedDate.join('-');
            },
        },
        components: { 
            WxPicker, 
            WxButton, 
            WxPopup, 
            WxField 
        }
    }
</script>
