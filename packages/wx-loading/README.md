## demo
  
```html
<template>
    <div>
        <wx-button @wxClick="openLoading">打开Loading</wx-button>
        <wx-loading :visible="visible"></wx-loading>
    </div>
</template>

<script>
    import WxLoading from '../../packages/wx-loading/index'
    import WxButton from '../../packages/wx-button/index'

    export default {
        data () {
            return {
                visible: false
            }
        },
        components: {WxLoading, WxButton},
        methods: {
            openLoading () {
                this.visible = true
                setTimeout(() => {
                    this.visible = false
                }, 2000)
            }
        }
    }
</script>

```