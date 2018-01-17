<template>
    <div class="wx-demo">
        <wx-navbar :vif="false" height="120px" width="750px" :hasBottom="true" :animated="true" :tabItems="tabItems" :lineStyle="{'background-color': '#ff0000', width:'220px'}" @wxChange="handleChange1">
            <text class="tab-page">1产品名称</text>
            <text class="tab-page">2产品介绍</text>
            <text class="tab-page">3申请流程</text>
        </wx-navbar>
        <wx-navbar :vif="true" :hasBottom="false" :animated="true" :tabItems="tabItems" @wxChange="handleChange2">
            <text v-if="selectedTab.index === 0" class="tab-page">v-if-1</text>
            <text v-if="selectedTab.index === 1" class="tab-page">v-if-2</text>
            <text v-if="selectedTab.index === 2" class="tab-page">v-if-3</text>
        </wx-navbar>
    </div>
</template>
<style>
    .tab-page {
        width: 750px;
        height: 200px;
    }
</style>
<script>
    import { WxNavbar } from '../../index';
    export default {
        components: {
            WxNavbar,
        },
        data () {
            return {
                tabItems:[
                    {
                        index:0,
                        title:"产品名称",  
                        titleColor:'', 
                        selectedColor: '',
                        titleSize: '',
                    },  
                    {
                        index:1,  
                        title:"产品介绍",  
                        titleColor:'', 
                        selectedColor: '',
                        titleSize: '', 
                    },  
                    {
                        index:2,  
                        title:"申请流程",  
                        titleColor:'',  
                        selectedColor: '',
                        titleSize: '',
                    }  
                ],
                selectedTab: {
                    index: 0
                },
            }
        },
        created () {

        },
        methods: {
            handleChange1 (item) {
                console.log(item.title);
            },
            handleChange2 (item) {
                this.selectedTab = item;
            },
        }
    }
</script>
