<template>
    <div class="wx-demo">
        <text class="title">checkbox</text>
        <wx-cell 
            text="爱看电影"
            icon=""
            height="100px"
            width="690px"
            textColor="#333"
            textFontSize="32px"
            :hasArrow="false"
            @wxClick="handleClick">
                <wx-checkbox 
                    slot="right"
                    text="" 
                    v-model="checked"
                    checkedColor="#027FF3"
                    align="left"
                    :disabled="false"
                    @wxChange="handleChange">
                </wx-checkbox>
            </wx-cell>
            <wx-cell 
                text=""
                icon=""
                height="100px"
                width="690px"
                textColor="#333"
                textFontSize="32px"
                :hasArrow="false">
                    <wx-checkbox 
                        slot="right"
                        text="爱看小说" 
                        v-model="checked2"
                        checkedColor="#027FF3"
                        align="left"
                        :disabled="false"
                        @wxChange="handleChange">
                    </wx-checkbox>
            </wx-cell>
            <wx-cell 
                text=""
                icon=""
                height="100px"
                width="690px"
                textColor="#333"
                textFontSize="32px"
                :hasArrow="false">
                    <wx-checkbox 
                        slot="right"
                        text="爱看小说" 
                        v-model="checked3"
                        checkedColor="#027FF3"
                        align="right"
                        :disabled="false"
                        @wxChange="handleChange">
                    </wx-checkbox>
            </wx-cell>
            <wx-cell 
                text=""
                icon=""
                height="100px"
                width="690px"
                textColor="#333"
                textFontSize="32px"
                :hasArrow="false">
                    <wx-checkbox 
                        slot="right"
                        text="disabled checked" 
                        v-model="checked4"
                        checkedColor="#027FF3"
                        align="left"
                        :disabled="true"
                        @wxChange="handleChange">
                    </wx-checkbox>
            </wx-cell>
            <wx-cell 
                text=""
                icon=""
                height="100px"
                width="690px"
                textColor="#333"
                textFontSize="32px"
                :hasArrow="false">
                    <wx-checkbox 
                        slot="right"
                        text="disabled" 
                        v-model="checked5"
                        checkedColor="#027FF3"
                        align="left"
                        :disabled="true"
                        @wxChange="handleChange">
                    </wx-checkbox>
            </wx-cell>
        <text class="title">checkbox-list</text>
        <wx-checkbox-list 
            v-model="list"
            :options="options"
            width="750px"
            height="100px"
            padding="20px"
            checkedColor="red"
            @wxChange="handleChange">
        </wx-checkbox-list>
        <div class="result">
            <text>[{{ list.join() }}]</text>
        </div>
    </div>
</template>
<style type="text/css" scoped>
    .wx-demo {
        flex-direction: column;
        align-items: center;
    }

    .title {
        width: 750px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
        background-color: #027FF3;
        color: #fff;
    }

    .result {
        flex-direction: row;
        justify-content: center;
        margin: 40px;
    }
</style>
<script>
    import { WxCheckbox, WxCell, WxCheckboxList } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        components: {
            WxCheckbox,
            WxCell,
            WxCheckboxList,
        },
        data () {
            return {
                 checked: false,
                 checked2: true,
                 checked3: false,
                 checked4: true,
                 checked5: false,
                 options: [
                    { title: '爱看电影', value: 1, checked: false, disabled: true },
                    { title: '爱看小说', value: 2, checked: true },
                    { title: '爱看抖音', value: 3, checked: false },
                    { title: '爱刷微博', value: 4, checked: true }
                 ],
                 list: [],
            }
        },
        created () {

        },
        methods: {
            handleClick () {
                // 第一个例子使用
                this.checked = !this.checked;
            },
            handleChange (checkedListValue) {
                console.log(checkedListValue)
            },
        }
    }
</script>
