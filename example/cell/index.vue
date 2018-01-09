<template>
    <div class="cell">
        <wx-cell 
            text="文字描述"
            icon=""
            height="200px"
            textColor="#333"
            textFontSize="32px"
            :hasArrow="false"
            @wxClick="handleClick">
                <text slot="left">标题</text>
                <text slot="right">图标</text>
            </wx-cell>
        <wx-cell 
            text="文字描述" 
            icon="http://ww2.sinaimg.cn/large/0060lm7Tgw1fb5paqsppfj302v02gmwx.jpg"
            height="100px"
            textColor="#333"
            textFontSize="32px"
            @wxClick="handleClick"></wx-cell>

        <wx-cell 
            text="文字描述" 
            height="100px"
            textColor="#333"
            textFontSize="32px"
            @wxClick="handleClick"></wx-cell>

        <wx-cell
                text="文字描述"
                height="100px"
                textColor="#333"
                textFontSize="32px"
                @wxClick="handleClick">
            <div class="hb-content" slot="left">
                <text class="hb-content-text">王小二</text>
                <text class="hb-content-text">230104198402132613</text>
            </div>
        </wx-cell>
    </div>
</template>

<style>
    .cell {
        width: 650px;
        margin-left: 50px;
    }
    .hb-content {
        position: absolute;
        left: 200px;
    }
    .hb-content-text {
        margin-top: 10px;
    }
</style>

<script>
    import { WxCell } from '../../index';
    const modal = weex.requireModule('modal');
    // import WxCell from 'weex-droplet-ui/packages/wx-cell';
    export default {
        components: { WxCell },
        methods: {
            handleClick () {
                modal.toast({
                    message: 'test'
                });
            }
        }
    };
</script>