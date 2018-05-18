<template>
    <scroller class="wx-scroller"
        :scroll-direction="scrollDirection"
        :style="scrollStyle" show-scrollbar="false">
        <div
            :style="getItemStyle(item)"
            :class="[hasBottom ? 'scroller-bottom-border' : '', selectIndex == index ? 'select-cell' : 'wx-cell']"
            :ref="'item'+index"
            v-for="(item, index) in items" @click="changeTab(index)">
            <text 
                :style="getTitleStyle(item)"
                :class="[selectIndex == index && hasSelectedBottom ? 'selected-border' : '']"
                class="wx-text">{{ item.title || item }}</text>
        </div>
    </scroller>
</template>
<script>
    const dom = weex.requireModule('dom');

    export default {
        props: {
            // {
            //     index: i,
            //     title: list[i].toString().substring(4) + '月',  
            //     titleColor: '#4d4d4d', 
            //     selectedColor: 'blue',
            //     titleSize: '32px',
            //     selected: false,
            //     bgColor: '#969696', 
            //     selectedBgColor: '#fff',
            // }
            items: {
                type: Array,
                default: function () {
                    return []
                },
                required: true
            },
            wxChange: {
                type: Function,
                required: true
            },

            hasBottom: {
                type: Boolean,
                default: false
            },

            hasSelectedBottom: {
                type: Boolean,
                default: false
            },

            height: {
                type: String,
                default: '700px'
            },

            itemWidth: {
                type: String,
                default: '250px'
            },
            itemHeight: {
                type: String,
                default: '100px'
            },

            scrollDirection: {
                type: String,
                default: 'vertical'
            },
        },

        data () {
            return {
                selectIndex: 0,
                count: 0,
                scrollStyle: {},
                data: {
                    // parent height child height
                    pheight: 0,
                    cwidth: 0,
                    cheight: 0,
                },
                hiddenCount: 0,
                maxHidden: 0,
            }
        },

        created () {
            let isVertical = this.getIsVertical();
            this.scrollStyle = {
                width: isVertical ? this.itemWidth : '750px', 
                height: this.height,
                'flex-direction': isVertical ? 'column' : 'row'
            }
            this.getData();
            // this.deviceHeight = weex.config.env.deviceHeight
            this.getCount()
            // 最大隐藏个数（共37条，一页10条，能隐藏37-10=27条）
            this.maxHidden = this.items.length - this.count;
        },

        mounted () {
            this.changeTab(this.getSelectIndex(), false);
        },

        methods: {

            getData () {
                this.data = {
                    pheight: Number(this.height.replace('px', '')),
                    cwidth: Number(this.itemWidth.replace('px', '')),
                    cheight: Number(this.itemHeight.replace('px', ''))
                };
            },

            getSelectIndex() {
                const item = this.items.find(el => el.selected) || this.items[0]
                return item.index
            },

            getCount () {
                if (this.getIsVertical()) {
                    this.count = Math.floor(this.data.pheight / this.data.cheight);
                } else {
                    this.count = Math.floor(750 / this.data.cwidth);
                }
            },

            getIsVertical () {
                return this.scrollDirection === 'vertical';
            },

            changeTab (index, animated = true) {
                this.selectIndex = index;
                if(index){
                    const middle = Math.floor(this.count / 2);
                    if (index >= middle) {
                        this.hiddenCount = index - middle;
                        this.hiddenCount = this.getCanMoves();
                        this.scrollTo(-this.hiddenCount * this.data.cheight, animated);
                    } else {
                        this.hiddenCount = 0;
                        this.scrollTo(0, animated);
                    }
                    this.items.forEach(item => {
                        item.selected = false;
                    });
                    this.items[index].selected = true;
                }
                this.$emit('wxChange', this.items[index]);
            },

            /**
             * 获取能移动多少条，不能超过总条数
             */
            getCanMoves () {
                const bool = this.hiddenCount > this.maxHidden;
                return bool ? this.maxHidden : this.hiddenCount;
            },

            scrollTo(elHeight, animated){
                const index = elHeight / this.data.cheight;
                if (index > 0) {
                    const itemStr = 'item' + (this.items.length - index);
                    const el = this.$refs[itemStr][0];
                    dom.scrollToElement(el, {animated});
                } else {
                    const itemStr = 'item' + (0 - index);
                    const el = this.$refs[itemStr][0];
                    dom.scrollToElement(el, {animated});
                }
            },

            getItemStyle (item) {
                const bgColor = (this.selectIndex === item.index ? item.selectedBgColor : item.bgColor) || '#fff';
                return {
                    width: this.itemWidth, 
                    height: this.itemHeight,
                    'background-color': bgColor,
                }
            },

            getTitleStyle (item) {
                const color = (this.selectIndex === item.index ? item.selectedColor : item.titleColor) || '#4d4d4d';
                return {
                    color: color,
                    height: this.itemHeight,
                    'line-height': this.itemHeight,
                    'font-size': item.titleSize || '32px',
                    'border-bottom-color': color
                }
            },
        }
    }
</script>
<style scoped>
    .wx-scroller {

    }

    .scroller-bottom-border {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
    }

    .wx-cell {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .wx-text {
        color: #4d4d4d;
        font-size: 32px;
    }

    .selected-border {
        border-bottom-width: 2px;
        border-bottom-style: solid;
    }

    .select-cell {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
    }
</style>
