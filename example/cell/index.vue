<template>
    <div class="cell">
        <wx-cell 
            text="纯文本内容" 
            height="100px"
            width="690px"
            textColor="#333"
            textFontSize="32px"
            :hasArrow="false"
            @wxClick="handleClick"></wx-cell>
        <wx-cell 
            text="纯文本内容" 
            height="100px"
            width="690px"
            textColor="#333"
            textFontSize="32px"
            @wxClick="handleClick"></wx-cell>

        <wx-cell 
            text="两侧内容"
            icon=""
            height="100px"
            width="690px"
            textColor="#666"
            textFontSize="32px"
            :hasArrow="false"
            @wxClick="handleClick">
                <text style="padding-right:20px; color: #000" slot="left">LEFT</text>
                <text style="color: #333" slot="right">RIGHT</text>
            </wx-cell>
        <wx-cell 
            text="左侧图片icon" 
            icon="http://ww4.sinaimg.cn/large/0060lm7Tgw1fb5ow9ddswj302s02gglh.jpg"
            height="100px"
            width="690px"
            textColor="#333"
            textFontSize="32px"
            @wxClick="handleClick"></wx-cell>

        <wx-cell
                text="中间内容"
                height="100px"
                width="690px"
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
        flex-direction: column;
        align-items: center;

    }
    .hb-content {
        position: absolute;
        left: 200px;
    }
    .hb-content-text {
        margin-top: 10px;
        font-size: 28px;
        color: #666;
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