<template>
    <div class="wx-demo">

        <div style="margin-bottom: 10px;">demo1</div>
        <wx-scrollerbar 
            :items="items"
            height="700px"
            @wxChange="handleChange"
            itemWidth="250px" 
            itemHeight="100px">
        </wx-scrollerbar>

        <div style="margin-top: 40px;">demo2</div>
        <wx-scrollerbar 
            scrollDirection="horizontal"
            :items="items"
            height="100px"
            @wxChange="handleChange"
            itemWidth="150px" 
            itemHeight="100px">
        </wx-scrollerbar>

        <text style="margin-top:40px;">demo3</text>
        <wx-scrollerbar 
            scrollDirection="horizontal"
            :items="months"
            height="100px"
            :hasBottom="true"
            :hasSelectedBottom="true"
            @wxChange="handleChange"
            itemWidth="125px" 
            itemHeight="100px">
        </wx-scrollerbar>
    </div>
</template>
<script>
    import { WxScrollerbar } from '../../index';

    const getMonths = () => {
        let arr = ['01月', '02月', '03月', '04月', '05月', '06月','07月', 
                    '08月', '09月', '10月', '11月', '12月'];
        arr = arr.map((item, index) => {
            const obj = {
                index: index,
                title: arr[index],  
                titleColor: '#4d4d4d', 
                selectedColor: '#4676FF',
                titleSize: '32px',
                selected: false,
                bgColor: '#fff', 
                selectedBgColor: '#fff',
            };
            if (index === 8) {
                obj.selected = true;
            }
            return obj;
        });
        return arr;
    };

    const getItems = () => {
        let arr = ['标题1', '标题2', '标题3', '标题4', '标题5', '标题6','标题7', '标题8', '标题9', '标题10', '标题11', '标题12','标题13'];
        arr = arr.map((item, index) => {
            return {
                index: index,
                title: arr[index],  
                titleColor: '#4d4d4d', 
                selectedColor: '#4676FF',
                titleSize: '32px',
                selected: false,
                bgColor: '#969696', 
                selectedBgColor: '#fff',
            };
        });
        return arr;
    }

    export default {
        components: {
            WxScrollerbar,
        },
        data () {
            return {
                items: getItems(),
                months: getMonths()
            }
        },

        created () {

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
