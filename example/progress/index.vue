<template>
    <div>
        <wx-progress 
            :outerStyle="{'background-color': '#f5f5f5'}"
            :innerStyle="{'background-color': '#f5222d','border-top-right-radius': '40px','border-bottom-right-radius': '40px'}"
            class="progress" 
            :animation="true" 
            :percent="100">
        </wx-progress>
        <wx-progress 
            :outerStyle="{'background-color': '#f5f5f5'}"
            :innerStyle="{'background-color': '#1890ff','border-top-right-radius': '40px','border-bottom-right-radius': '40px'}"
            class="progress" 
            :animation="true" 
            :percent="90">
        </wx-progress>
        <wx-progress class="progress" :animation="true" :percent="80"></wx-progress>
        <wx-progress class="progress" :animation="true" :percent="70"></wx-progress>
        <wx-progress class="progress" :animation="true" :percent="60"></wx-progress>
    </div>
</template>

<script>
    import WxProgress from '../../packages/wx-progress/index'
    import WxButton from '../../packages/wx-button/index'

    export default {
        data () {
            return {
                
            }
        },
        components: {
            WxProgress,
            WxButton
        },
        methods: {
        }
    }
</script>
<style type="text/css" scoped>
    .progress {
        margin-top: 60px;
    }
</style>
