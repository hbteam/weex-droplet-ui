<template>
    <div>
        <div style="margin-right: 25px; margin-left: 25px;">
            <wx-field
                    label="用户名"
                    placeholder="请输入用户名"
                    type="text"
                    :autofocus="false"
                    :disabled="false"
                    labelPosition="top"
                    width="700px"
                    height="200px"
                    unit="元"
                    v-model="password1"></wx-field>
            <wx-field
                    label="密码"
                    placeholder="请输入密码"
                    width="700px"
                    labelPosition="top"
                    :value="password2"
                    :hasArrow="true"
                    height="200px"></wx-field>
            <wx-field
                    label="电话"
                    placeholder="请输入电话号码"
                    type="tel"
                    width="700px"
                    :inputStyles="inputStyles"
                    :styles="{'border-bottom-width': 0}"
                    v-model="password3"
                    height="110px"></wx-field>
        </div>
        <div class="wrap-button">
            <wx-button class="submit" @wxClick="wxClickHandle">提交</wx-button>
        </div>
    </div>
</template>
<style type="text/css">
    .wrap-button {
        height: 300px;
        width: 750px;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import { WxField, WxButton } from '../../index'

    const modal = weex.requireModule('modal')
    // import WxField from 'weex-droplet-ui/packages/wx-field';
    export default {
        components: {WxField, WxButton},
        data () {
            return {
                password1: '',
                password2: '',
                password3: '',
                inputStyles: {
                    'text-align': 'center'
                },
                noBorder: {
                    'border-bottom-width': 0
                }
            }
        },
        methods: {
            wxClickHandle () {
                const value = this.password1 + this.password2 + this.password3
                modal.toast({
                    message: value
                })
            }
        }
    }
</script>