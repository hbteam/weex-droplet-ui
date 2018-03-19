<template>
    <div class="wx-demo">
        <wx-scrollerbar 
            :items="items"
            height="700px"
            @wxChange="handleChange"
            itemWidth="250px" 
            itemHeight="100px">
        </wx-scrollerbar>

        <div style="margin-top: 100px;"></div>

        <wx-scrollerbar 
            scrollDirection="horizontal"
            :items="items"
            height="100px"
            @wxChange="handleChange"
            itemWidth="150px" 
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
                items: ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6','demo7', 'demo8', 'demo9', 'demo10', 'demo11', 'demo12','demo13'],
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
