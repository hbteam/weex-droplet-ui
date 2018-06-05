<template>
    <div class="wx-demo">

        <text class="wx-text">dialog1: 使用自定义内容与自定义button</text>
        <wx-button class="button" @wxClick="dialogVisible = true">dialog1</wx-button>

        <text class="wx-text">dialog2: 使用自定义内容与默认button</text>
        <wx-button class="button" @wxClick="dialog2Visible = true">dialog2</wx-button>

        <text class="wx-text">dialog1: 使用title作为内容和默认button</text>
        <wx-button class="button" @wxClick="dialog3Visible = true">dialog3</wx-button>

        <wx-dialog :visible="dialogVisible" :useDefaultFooter="false">
            <div slot="dialog-body" class="dialog-body">
                <text class="dialog-text1">咨询服务热线</text>
                <text class="dialog-text2">400-400-680</text>
                <text class="dialog-text3">服务时间: 9:00-18:00(法定节假日除外)</text>
            </div>
            <div slot="dialog-footer" class="dialog-footer">
                <text class="dialog-footer-btn btn-cancel" @click="dialogVisible=false">取消</text>
                <text class="dialog-footer-btn btn-consult" @click="handleConfirmConsult">致电客服</text>
            </div>
        </wx-dialog>

        <wx-dialog 
            :visible="dialog2Visible" 
            @confirm="dialog2Visible = false"
            @cancel="dialog2Visible = false">
            <div slot="dialog-body" class="dialog-body">
                <text class="dialog-text1">咨询服务热线</text>
                <text class="dialog-text2">400-400-680</text>
                <text class="dialog-text3">服务时间: 9:00-18:00(法定节假日除外)</text>
            </div>
        </wx-dialog>

        <wx-dialog 
            :clickConfirmHide="true"
            title="您确认删除吗？"
            :visible="dialog3Visible" 
            @confirm="dialog3Visible = false"
            @cancel="dialog3Visible = false">
            <div slot="dialog-outer">
                <text class="outer" @click="test">这里是dialog内容之外区域</text>
            </div>
        </wx-dialog>
    </div>
</template>
<style scoped>
    .wx-demo {
        flex-direction: column;
        align-items: center;
    }
    .button {
      /*margin-bottom: 100px;*/
    }

    .outer {
        margin-top: 40px;
        background-color: rgba(0,0,0,0);
        font-size: 32px;
    }

    .wx-text {
        font-size: 32px;
        margin-top: 100px;
        color: #999;
    }

    .attention {
        font-size: 40px;
        color: #333;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    /*dialog*/
    .dialog-body {
        height: 248px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .dialog-text1 {
        font-size: 34px;
        color: #333;
        line-height: 56px;
    }
    .dialog-text2 {
        font-size: 40px;
        color: #333;
        line-height: 56px;
    }
    .dialog-text3 {
        font-size: 24px;
        color: #333;
        line-height: 56px;
    }
    .dialog-footer {
        flex-direction: row;
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: #dcdcdc;
        height: 80px;
    }
    .dialog-footer-btn {
        flex: 1;
        align-items: center;
        text-align: center;
        height: 80px;
        line-height: 80px;
    }
    .btn-cancel {
        font-size: 32px;
        color: #969696;
    }
    .btn-consult {
        border-left-style: solid;
        border-left-width: 1px;
        border-left-color: #DCDCDC;
        background-color: #ff5900;
        font-size: 32px;
        color: #fff;
    }
    /*dialog*/
    
</style>
<script>
    import { WxDialog, WxButton } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
      components: {
          WxDialog,
          WxButton
      },
      data () {
          return {
              dialogVisible: false,
              dialog2Visible: false,
              dialog3Visible: false,
          }
      },
      created () {

      },
      methods: {
          handleConfirmConsult () {
              this.dialogVisible = false;
          },

          test () {
                modal.alert({message: 'test'})
          }
        }
    }
</script>
