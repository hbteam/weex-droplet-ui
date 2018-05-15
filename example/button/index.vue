<template>
    <div class="wx-demo">
        <wx-button 
          height="80px"
          width="450px"
          borderRadius="200px"
          textColor="#fff"
          textFontSize="32px"
          :disabled="disabled"
          @wxClick="wxClickHandle1">测试1{{disabled}}</wx-button>

        <wx-button 
            height="80px"
            width="450px"
            borderRadius="200px"
            textColor="#fff"
            textFontSize="32px"
            :disabled="false"
            :styles="{'margin-left': '50px','margin-top': '80px'}"
            :disableOnPromise="wxClickHandle2">测试2</wx-button>
    </div>
</template>

<script>
    import { WxButton } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        data(){
            return {
                disabled: true
            }
        },
      components: {
          WxButton 
      },
      mounted () {
          setTimeout(()=> {
              this.disabled = false
          },2000)
      },
      methods: {
          wxClickHandle1 () {
              modal.toast({
                  message: 'clicked 1'
              })

          },

          // 点击之后，会执行wxClickHandle2()，它必须返回一个Promise
          wxClickHandle2 () {
              return this.request().then(() => {
                  // TODO
              }).catch(() => {
                  // TODO
              })
          },

          request () {
              return new Promise(function(resolve, reject) {
                  const result = '接口返回成功'
                  setTimeout(() => {
                      if (result !== '接口返回成功') {
                          resolve(result);
                      } else {
                          reject(result);
                      }
                  }, 2000)
              });
          },
        }
    }
</script>
