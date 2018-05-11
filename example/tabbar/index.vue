<template>
    <div class="wx-demo">
        <wx-tabbar :styles="{'border-top-width': '1px'}" bottom="0px" height="128px" :tabItems="tabItems" @wxChange="handleChange">
            <text class="tab-page">1</text>
            <text class="tab-page">2</text>
            <text class="tab-page">3</text>
        </wx-tabbar>
    </div>
</template>
<style type="text/css">
    .tab-page {
        width: 750px;
    }
</style>
<script>
    import { WxTabbar, WxHeader, WxButton } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        components: {
            WxTabbar,
            WxHeader,
            WxButton,
        },
        data () {
            return {
                tabItems:[
                    {
                        index:0,
                        title:"主页",  
                        titleColor:'#646464',  
                        selectedColor: '#4676FF',
                        fontSize: '28px',
                        iconWdith: '38px',
                        iconHeight: '38px',
                        image:"http://ww2.sinaimg.cn/large/0060lm7Tgw1fb5paqsppfj302v02gmwx.jpg",  
                        selectedImage:"http://ww3.sinaimg.cn/large/0060lm7Tgw1fb5pacghqhj302v02g744.jpg",  
                    },  
                    {
                        index:1,  
                        title:"收藏",  
                        titleColor:'#646464',  
                        selectedColor: '#4676FF',
                        fontSize: '28px',
                        iconWdith: '38px',
                        iconHeight: '38px',
                        image:"http://ww2.sinaimg.cn/large/0060lm7Tgw1fb5oxe9vbkj302s02g0si.jpg",  
                        selectedImage:"http://ww4.sinaimg.cn/large/0060lm7Tgw1fb5ow9ddswj302s02gglh.jpg",  
                    },  
                    {
                        index:2,  
                        title:"我的",   
                        titleColor:'#646464',  
                        selectedColor: '#4676FF',
                        fontSize: '28px',
                        iconWdith: '38px',
                        iconHeight: '38px',
                        image:"http://ww1.sinaimg.cn/large/0060lm7Tgw1fb5pbtauy1j302c02hmwx.jpg",  
                        selectedImage:"http://ww4.sinaimg.cn/large/0060lm7Tgw1fb5pbb390dj302c02hglg.jpg",  
                    }  
                ]  
            }
        },
        created () {

        },
        methods: {
            handleChange (item) {
                modal.alert({
                    message: item.title
                })
            },
        }
    }
</script>
