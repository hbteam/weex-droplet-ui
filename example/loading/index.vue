<template>
    <div class="wx-demo">
        <wx-button width="690px" class="button" @wxClick="openLoading">打开Loading</wx-button>
        <wx-loading opacity="0.6" :visible="visible"></wx-loading>
    </div>
</template>

<style type="text/css">
    .wx-demo {
        margin-left: 30px;
        margin-top: 60px;
    }
</style>

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
