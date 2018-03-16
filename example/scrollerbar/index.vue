<template>
    <div class="wx-demo">
        <wx-scrollerbar 
            :items="items"
            width="250px" 
            height="700px"
            @wxChange="handleChange"
            itemHeight="100px">
        </wx-scrollerbar>
    </div>
</template>
<script>
    import { WxScrollerbar } from '../../index';
    export default {
        components: {
            WxScrollerbar,
        },
        data () {
            return {
                items: ['保单信息1', '保单信息2', '保单信息3', '保单信息4', '保单信息5', '保单信息6','保单信息7', '保单信息8', '保单信息9', '保单信息10', '保单信息11', '保单信息12','保单信息13'],
            }
        },
        methods: {
            /**
             * 点击回调
             * @param  {[type]} item 被选中的项
             */
            handleChange (item) {
                console.log(item)
            }
        }
    }
</script>
<style scoped>
    
</style>
