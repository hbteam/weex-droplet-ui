<template>
    <div>
        <scroller class="wx-list" show-scrollbar="false">
            <div class="content" ref="list">
                <div
                    :class="[selectIndex == index ? 'select-cell' : 'wx-cell']"
                    v-for="(item, index) in items" @click="changeTab(index)">
                    <text class="wx-text">{{ item }}</text>
                </div> 
            </div>
        </scroller>
    </div>
</template>
<script>
    var dom = weex.requireModule('dom')
    var animation = weex.requireModule('animation')
    export default {
        data () {
            return {
                items: ['保单信息1', '保单信息2', '保单信息3', '保单信息4', '保单信息5', '保单信息6',
                    '保单信息7', '保单信息8', '保单信息9', '保单信息10', '保单信息11', '保单信息12','保单信息13'],
                selectIndex: 0,
                count: 0,
                data: {
                    pwidth: 250,
                    pheight: 1000,
                    cheight: 100,
                },
                hiddenCount: 0,
                maxHidden: 0,
            }
        },

        created () {
            // this.deviceHeight = weex.config.env.deviceHeight
            this.count = Math.floor(this.data.pheight / this.data.cheight);
            // 最大隐藏个数（共37条，一页10条，能隐藏37-10条）
            this.maxHidden = this.items.length - this.count;
        },

        methods: {
            changeTab (index) {
                this.selectIndex = index;
                if (!index) return;
                const middle = Math.floor(this.count / 2);
                if (index >= middle) {
                    this.hiddenCount = index - middle;
                    console.log(index - middle)
                    this.hiddenCount = this.getCanMove();
                    this.triggerAnimation(-this.hiddenCount * this.data.cheight);
                } else {
                    this.hiddenCount = 0;
                    this.triggerAnimation(0);
                }
            },

            /**
             * 获取能移动多少条，不能超过总条数
             */
            getCanMove () {
                return this.hiddenCount > this.maxHidden ? this.maxHidden : this.hiddenCount;
            },

            triggerAnimation(top){
                let el = this.$refs.list;
                animation.transition(el, {
                    styles: {
                        transform: `translateY(${top}px)`,
                        transformOrigin: 'center center'
                    },
                    duration: 300,
                    timingFunction: 'ease-out',
                    needLayout: false,
                    delay: 0 //ms
                });
            }
        }
    }
</script>
<style scoped>
    .wx-list {
        width: 250px;
        background-color: #969696;
        height: 1000px;
        overflow: hidden;
    }

    .wx-cell {
        width: 250px;
        height: 100px;
    }

    .wx-text {
        color: #4d4d4d;
        font-size: 32px;
        width: 250px;
        height: 160px;
        text-align: center;
        line-height: 100px;
    }

    .select-cell {
        width: 250px;
        height: 100px;
        font-size: 32px;
        background-color: #ffffff;
    }
</style>
