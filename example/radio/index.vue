<template>
    <div class="wx-demo">

        <text class="title">row</text>
        <wx-radio 
            checkedColor="#027FF3"
            class="radio1"
            size="44px"
            width="670px"
            align="right"
            textColor="#4D4D4D"
            textFontSize="32px"
            direction="row"
            v-model="selected1"
            :options="options1"
            @wxChange="handleChange">
        </wx-radio>
        <div class="selected">
            <text class="name">选中的value</text>
            <text class="value">{{ selected1 }}</text>
        </div>


        <text class="title">column</text>
        <wx-radio 
            class="radio2"
            checkedColor="#027FF3"
            size="44px"
            align="left"
            textColor="#4D4D4D"
            textFontSize="32px"
            direction="column"
            v-model="selected2"
            :options="options2"
            @wxChange="handleChange">
        </wx-radio>
        <div class="selected">
            <text class="name">选中的value</text>
            <text class="value">{{ selected2 }}</text>
        </div>
    </div>
</template>
<style type="text/css" scoped>
    .wx-demo {
        flex-direction: column;
        align-items: center;
    }

    .radio1 {
        height: 150px;
        background-color: #fff;
    }

    .radio2 {
        background-color: #fff;
    }

    .title {
        width: 750px;
        background-color: #fafafa;
        color: #888;
        height: 100px;
        line-height: 100px;
        padding-left: 20px;
    }

    .selected {
        width: 750px;
        padding-left: 40px;
        padding-right: 40px;
        flex-direction: row;
        justify-content: space-between;
        height: 80px;
        align-items: center;
        background-color: #fafafa;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .name {
        color: #4d4d4d;
        font-size: 32px;
    }

    .value {
        color: #888;
        font-size: 32px;
    }
</style>
<script>
    import { WxRadio } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        components: {
            WxRadio,
        },
        data () {
            return {
                 options1: [
                    {title: '爱看电影', value: 1, checked: false, disabled: true},
                    {title: '爱看小说', value: 2, checked: false},
                    {title: '爱玩游戏', value: 3, checked: false},
                 ],
                 options2: [
                    {title: '爱看电影', value: 1, checked: false},
                    {title: '爱看小说', value: 2, checked: true},
                    {title: '爱玩游戏', value: 3, checked: false},
                 ],
                 selected1: null,
                 selected2: null,
            }
        },
        created () {
            
        },
        methods: {
            handleChange (value) {

            },
        }
    }
</script>
