<template>
    <div>
        <wx-input 
            class="demo"
            placeholder="请输入手机号">
            <wx-icon class="icon" slot="left" name="search"></wx-icon>
        </wx-input>
                
        <wx-input 
            class="demo"
            width="500px"
            type="password"
            placeholder="请输入密码">
            <wx-icon class="icon" slot="left" name="search"></wx-icon>
        </wx-input>
    </div>
</template>
<style scope>
    .demo {
        margin-top: 52px;
        margin-left: 40px;
        margin-right: 40px;
    }
    .icon {
        font-size: 44px;
        color:#DEDEDE;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
</style>
<script>
    import WxInput from '../../packages/wx-input/index';
    import WxIcon from '../../packages/wx-icon/index';

    export default {
        data () {
            return {
            }
        },
        components: { WxInput, WxIcon }
    }
</script>
