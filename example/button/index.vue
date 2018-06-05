<template>
    <div class="wx-demo">

        <wx-button 
          height="80px"
          width="690px"
          class="button"
          textColor="#fff"
          textFontSize="32px"
          @wxClick="wxClickHandle1">normal button</wx-button>

        <wx-button 
          height="80px"
          width="690px"
          class="button"
          textColor="#fff"
          :disabled="true"
          disabledBgColor="rgba(70,118,255,0.3)"
          textFontSize="32px"
          @wxClick="wxClickHandle1">normal disabled button</wx-button>


        <wx-button 
            height="80px"
            width="690px"
            class="button"
            textColor="#fff"
            textFontSize="32px"
            :disabled="false"
            :styles="{'background-color': '#F37B1D'}"
            disabledBgColor="rgba(243,123,29,0.3)"
            :disableOnPromise="wxClickHandle2">promise button</wx-button>

        <wx-button 
            height="80px"
            width="690px"
            class="button"
            textColor="#4d4d4d"
            textFontSize="32px"
            :styles="btnStyle"
            @wxClick="wxClickHandle1">确定</wx-button>
    </div>
</template>

<style type="text/css">
  .wx-demo {
    flex-direction: column;
    align-items: center;
  }

  .button {
    margin-top: 40px;
  }
</style>

<script>
    import { WxButton } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        data(){
            return {
                btnStyle: {
                  'background-color': '#fff', 
                  'border-width': '1px',
                  'border-style': 'solid',
                  'border-color': '#A5A5A5',
                },
            }
        },
      components: {
          WxButton 
      },

      methods: {
          wxClickHandle1 () {
              modal.toast({
                  message: `clicked`,
              });
          },

          /**
           * 1. 点击按钮，会执行wxClickHandle2()方法，且必须返回Promise。
           * 2. 解决避免在请求未结束时产生重复提交或请求
           * 3. 无论结果是resolve或者reject，button都会恢复至可点击状态。
           * @return {Promise} promise
           */
          wxClickHandle2 () {
              modal.toast({
                  message: 'clicked 2'
              });
              return this.request().then((data) => {
                  // TODO
                  console.log(data)
              }).catch((data) => {
                  // TODO
                  console.log(data)
              })
          },

          /**
           * 模拟Promise封装接口请求方法，必须返回Promise
           * @return {Promise} promise
           */
          request () {
              return new Promise(function(resolve, reject) {
                  const result1 = '接口调用成功';
                  const result2 = '接口调用失败';
                  setTimeout(() => {
                      if (true) {
                          resolve(result1);
                      } else {
                          reject(result2);
                      }
                  }, 2000);
              });
          },
        }
    }
</script>
