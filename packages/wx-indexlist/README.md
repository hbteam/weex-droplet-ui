## demo

```html
<template>
    <div>
        <wx-button width="600px" textFontSize="32px" class="button"
         @wxClick="showSheet1 = true">不带取消按钮</wx-button>

        <wx-button width="600px" textFontSize="32px" class="button"
          @wxClick="showSheet2 = true">点击空白处不关闭</wx-button>

        <wx-actionsheet
            v-model="showSheet1"
            :actions="actions1"
            cancelText=""
            titleText=""
            actionColor="#f00"
            actionFontSize="52px">
        </wx-actionsheet>

        <wx-actionsheet
            v-model="showSheet2"
            :actions="actions2"
            :closeOnClickMask="false"
            titleText="客服服务时间:工作日09:00-20:00"
            cancelColor="#f00"
            cancelFontSize="38px">
        </wx-actionsheet>
    </div>
</template>

<script>
    import { WxActionsheet, WxButton } from '../../index';
    const modal = weex.requireModule('modal');

    export default {
        components: {
            WxActionsheet,
            WxButton
        },

        data () {
            return {
                showSheet1: false,
                showSheet2: false,
                actions1: [],
                actions2: []
            }
        },

        methods: {
            takePhoto () {
                modal.toast({ message: 'taking photo' });
            },

            openAlbum () {
                modal.toast({ message: 'opening album' });
            },

            callPhone (action) {
                modal.toast({ message: action.name });
            },

            takeMobile (action) {
                modal.toast({ message: action.name });
            }
        },

        mounted () {
            this.actions1 = [
                {
                    name: '拍照',
                    method: this.takePhoto
                },
                {
                    name: '从相册中选择',
                    method: this.openAlbum
                },
            ];

            this.actions2 = [
                {
                    name: '咨询服务热线:400-888-8888',
                    method: this.callPhone
                },
                {
                    name: '152-2926-7590',
                    method: this.takeMobile
                }
            ];
        }
    };
</script>
<style type="text/css">
    .button {
        margin-top: 100px;
        margin-left: 75px;
    }
</style>

```