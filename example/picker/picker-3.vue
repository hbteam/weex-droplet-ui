<template>
    <div class="wx-demo">
        <wx-popup 
            :visible="visible" 
            position="bottom" 
            :hasOverley="true"
            :closeOnClickMask="false"
            height="488px"
            ref="wxPopup"
            @wxChange="handleBottom">
            <div>
                <div class="btn-wrap">
                    <text class="btn" @click="handleCancel">取消</text>
                    <text class="btn" @click="handleFinish">完成</text>
                </div>
                <div class="flex">
                    <wx-picker class="flex-1" :data="provins" :visible="visible" @wxChange="handleChangeProvin"></wx-picker>
                    <wx-picker class="flex-1" :data="citys" :visible="visible" @wxChange="handleChangeCity"></wx-picker>
                    <wx-picker class="flex-1" :data="areas" :visible="visible" @wxChange="handleChangeArea"></wx-picker>
                </div>
            </div>
        </wx-popup>
    </div>
</template>
<style scoped>
    .wx-demo {

    }

    .flex {
        flex-direction: row;
    }

    .flex-1 {
        flex: 1;
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
    import { provins, citys, areas } from './address';

    export default {
        data () {
            return {
                visible: false,
                provins: {},
                citys: {},
                areas: {},
                address: [],
            }
        },

        props: ['defaultValue', 'visible'],

        created () {
            this.address = this.defaultValue;
            this.initDefaultData();
        },

        methods: {
            initDefaultData () {
                this.provins = {
                    list: provins,
                    defaultValue: this.defaultValue[0],
                    displayValue (name) {
                        return name;
                    }
                };
                this.citys = {
                    list: citys[this.defaultValue[0]],
                    defaultValue: this.defaultValue[1],
                    displayValue (name) {
                        return name;
                    }
                };
                this.areas = {
                    list: areas[this.defaultValue[1]],
                    defaultValue: this.defaultValue[2],
                    displayValue (name) {
                      return name;
                    }
                }
            },

            handleChangeProvin (provin) {
                this.provins = {
                    list: provins,
                    defaultValue: provin,
                    displayValue (name) {
                        return name;
                    }
                };
                this.citys = {
                    list: citys[provin],
                    defaultValue: citys[provin][0],
                    displayValue (name) {
                        return name;
                    }
                };
                this.areas = {
                    list: areas[citys[provin][0]],
                    defaultValue: areas[citys[provin][0]][0],
                    displayValue (name) {
                        return name;
                    }
                };
                this.address = [];
                this.address.push(provin);
                this.address.push(citys[provin][0]);
                this.address.push(areas[citys[provin][0]][0]);
                this.$emit('wxChange', this.address);
            },

            handleChangeCity(city) {
                this.address[1] = city;
                this.address[2] = areas[city][0];
                this.areas = {
                    list: areas[city],
                    defaultValue: areas[city][0],
                    displayValue (name) {
                        return name;
                    }
                };
                this.$emit('wxChange', this.address);
            },

            handleChangeArea(area) {
                this.address[2] = area;
                this.$emit('wxChange', this.address);
            },

            handleBottom () {
                this.$emit('wxCancel');
            },
            handleFinish () {
                this.$refs.wxPopup.hide(() => {
                    this.$emit('wxConfirm', this.address);
                });
            },
            handleCancel () {
                this.$refs.wxPopup.hide(() => {
                    this.$emit('wxCancel');
                });
            }
        },
        components: { WxPicker, WxButton, WxPopup }
    }
</script>
