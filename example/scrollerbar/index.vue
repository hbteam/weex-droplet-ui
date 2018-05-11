<template>
    <div class="wx-demo">
        <!-- <wx-scrollerbar 
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
        </wx-scrollerbar> -->
        <text style="margin-top:60px;"></text>
        <wx-scrollerbar 
            scrollDirection="horizontal"
            :items="months"
            height="100px"
            @wxChange="handleChange"
            itemWidth="125px" 
            itemHeight="100px">
        </wx-scrollerbar>
    </div>
</template>
<script>
    import { WxScrollerbar } from '../../index';

    // 获取比当前月份<=12月的月份日期
    // return [201801,201802,...]
    function getMonths () {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const startY = 2018;
        const startM = 1;
        const startDate = 201801;
        const rs = (year - startY) * 12 + (month - startM) + 1;
        if (year === startY) {
            return months1(startDate, 12);
        } else {
            return months2(startDate, rs);
        }
    }

    function months1 (start, month) {
        const arr = [];
        for (let i = 0; i < month; i ++) {
            arr.push(start + i);
        }
        return arr;
    }

    function months2 (start, length) {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const d1 = (month-month + 1) >= 10 ? (month-month + 1) : ('0' + (month-month + 1));
        const d2 = (month+1) >=10 ? (month+1) : ('0' + (month+1));
        const arr1 = months1(Number(year + '' + d1), month)
        const arr2 = months1(Number(year - 1 + '' +d2 ), 12-month);
        return arr2.concat(arr1);
    }

    const getData = () => {
        const list = getMonths();
        let arr = [];
        for (let i = 0; i< list.length; i ++) {
            const obj = {
                index: i,
                title: list[i].toString().substring(4) + '月',  
                titleColor: '#4d4d4d', 
                selectedColor: 'blue',
                titleSize: '32px',
                selected: false,
                bgColor: '#969696', 
                selectedBgColor: 'white',
            };
            if (i === 4) {
                obj.selected = true;
            }
            arr.push(obj);
        }
        return arr;
    };


    export default {
        components: {
            WxScrollerbar,
        },
        data () {
            return {
                items: ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6','demo7', 'demo8', 'demo9', 'demo10', 'demo11', 'demo12','demo13'],
                months: getData()
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
