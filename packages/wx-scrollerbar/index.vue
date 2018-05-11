<template>
    <scroller class="wx-scroller" 
        :scroll-direction="scrollDirection"
        :style="scrollStyle" show-scrollbar="false">
        <div
            :style="{width: itemWidth, height: itemHeight}"
            :class="[selectIndex == index ? 'select-cell' : 'wx-cell']"
            :ref="'item'+index"
            v-for="(item, index) in items" @click="changeTab(index)">
            <text class="wx-text">{{ item }}</text>
        </div> 
    </scroller>
</template>
<script>
    const dom = weex.requireModule('dom');

    export default {
        props: {
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
            // 最大隐藏个数（共37条，一页10条，能隐藏37-10条）
            this.maxHidden = this.items.length - this.count;
        },

        methods: {

            getData () {
                this.data = {
                    pheight: Number(this.height.replace('px', '')),
                    cwidth: Number(this.itemWidth.replace('px', '')),
                    cheight: Number(this.itemHeight.replace('px', ''))
                };
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

            changeTab (index) {
                this.selectIndex = index;
                if (!index) return;
                const middle = Math.floor(this.count / 2);
                if (index >= middle) {
                    this.hiddenCount = index - middle;
                    this.hiddenCount = this.getCanMoves();
                    this.scrollTo(-this.hiddenCount * this.data.cheight);
                } else {
                    this.hiddenCount = 0;
                    this.scrollTo(0);
                }
                this.$emit('wxChange', this.items[index]);
            },

            /**
             * 获取能移动多少条，不能超过总条数
             */
            getCanMoves () {
                return this.hiddenCount > this.maxHidden ? this.maxHidden : this.hiddenCount;
            },

            scrollTo(elHeight){
                const index = elHeight / this.data.cheight;
                if (index > 0) {
                    const el = this.$refs['item' + (13-index)][0];
                    dom.scrollToElement(el, {});
                } else {
                    const el = this.$refs['item' + (0-index)][0];
                    dom.scrollToElement(el, {});
                }
            }
        }
    }
</script>
<style scoped>
    .wx-scroller {
        background-color: #969696;
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

    .select-cell {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
    }
</style>
