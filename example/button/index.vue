<template>
    <div class="wx-demo">
        <wx-button 
          height="80px"
          width="450px"
          borderRadius="200px"
          textColor="#fff"
          textFontSize="32px"
          :disabled="disabled"
          @wxClick="wxClickHandle">测试1{{disabled}}</wx-button>

        <wx-button 
            height="80px"
            width="450px"
            borderRadius="200px"
            textColor="#fff"
            textFontSize="32px"
            :disabled="false"
            :styles="{'margin-left': '50px','margin-top': '80px'}"
            @wxClick="wxClickHandle">测试1</wx-button>
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
          wxClickHandle () {
            modal.toast({
                message: 'clicked'
            })
          }
        }
    }
</script>
