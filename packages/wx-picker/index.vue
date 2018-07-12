<template>
    <div class="wx-picker-wrapper" v-if="visible" @touchstart="preventDefault">
        <div class="wx-picker" @panstart="ontouchstart" @panend="ontouchend" @panmove="ontouchmove" >
            <div class="wrapper" ref="wrapper">
                <text 
                    class="picker-item"
                    :class="[getSelectedClass(index)]"
                    v-for="(item, index) in data.list">{{item.name || item}}</text>
            </div>
            <text class="picker-center"></text>
        </div>
    </div>
</template>
<style>

    .wx-picker-wrapper {
        overflow: hidden;
        background-color: #fff;
    }

    .wx-picker {
        overflow: hidden;
        background-color: #fff;
        height: 432px;
    }

    .wrapper {
        overflow: hidden;
        flex-direction: column;
        background-color: #fff;
        margin-top: 32px;
    }

    .picker-item {
        flex: 1;
        text-align: center;
        line-height: 72px;
        background-color: #fff;
        height: 72px;
        color: #999;
        font-size: 32px;
    }

    .picker-item-selected {
        color: #000;
    }

    .picker-center {
        width: 750px;
        height: 72px;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #DCDCDC;

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
        position: absolute;
        top: 176px;
        left: 0;
        z-index: 100;
        width: 750px;
        /*margin-top: -36px;*/
        justify-content: center;
        align-items: center;
    }

</style>
<script type="text/javascript">
    import is from '../utils/is';
    import mixins from '../utils/mixins';
    const animation = weex.requireModule('animation');

    const getIndex = (list, item) => {
        if (list && list.length < 1) {
            return 0;
        }
        let index1 = list.findIndex(v => {
            return v === item || (v.name && v.name === item.name);
        });
        let index2 = list.indexOf(item);
        let index = Math.max(index1, index2);
        if (index < 0) {
            // throw new Error('list数组中不存在defaultValue');
            return 0;
        }
        return index;
    };

    export default {
        mixins:[mixins],
        props: {
            visible: {
                type: Boolean,
                default: false
            },

            data: {
                type: Object,
                default: function () {
                    return {};
                },
                required: true
            },
        },
        data () {
            return {
                startY: 0,
                endY: 0,
                currentY: 0,
                itemHeight: 72,
                selectedIndex: 0,
                _defaultValue: null,
                _startTime: 0,
            }
        },
        created () {
            this.selectedIndex = this.getInitialIndex();
        },

        mounted () {
            this.initMove();
        },
        
        methods: {

            getInitialIndex() {
                let index = getIndex(
                  this.data.list,
                  this.data.defaultValue
                );
                if (!this.data.defaultValue && this.data.list.length > 3) {
                  index = Math.floor(this.data.list.length / 2);
                }
                return index;
            },

            initMove () {
                this.currentY = 0;
                if (this.selectedIndex > 2) {
                  this.currentY = - (this.selectedIndex - 2) * this.itemHeight;
                } else {
                  this.currentY = (2 - this.selectedIndex) * this.itemHeight;
                }
                this.move(this.currentY);
            },

            getSelectedClass (index) {
                if (this.selectedIndex === index) {
                  return 'picker-item-selected';
                }
                return '';
            },

            ontouchstart (e) {
                this.preventDefault(e);
                if (this.data.list.length <= 1) {
                    return;
                }
                this.startY = e.changedTouches[0].screenY;
                this._startTime = new Date().getTime();
            },

            ontouchmove (e) {
                this.preventDefault(e);
                if (this.data.list.length <= 1) {
                  return;
                }
                const pageY = e.changedTouches[0].screenY;
                let value = parseInt(pageY - this.startY);
                const y = this.currentY + value;
                this.move(y);
            },

            ontouchend (e) {
                this.preventDefault(e);
                if (this.data.list.length <= 1) {
                  return;
                }
                this.endY = e.changedTouches[0].screenY;
                // 实际滚动距离
                let v = parseInt(this.endY - this.startY);
                // 如果快速滑动，实际滑动距离放大5倍
                const endTime = new Date().getTime();
                if (endTime - this._startTime < 200) {
                    v = v * 5;
                }
                let value = v % this.itemHeight;
                // 计算出每次拖动的36px整倍数
                this.currentY += (v - value);

                // 正数y最大值
                const max1 = 2 * this.itemHeight;
                // 负数y最小值
                const max2 = (this.data.list.length - 3) * this.itemHeight;

                if (this.currentY > max1) {
                  this.currentY = max1;
                }
                else if (this.currentY > 0 && this.currentY < max1) {
                  this.currentY = this.currentY;
                }
                else if (this.currentY === max1) {
                  this.currentY = this.currentY;
                }
                else if (Math.abs(this.currentY) > max2) {
                  this.currentY = - max2;
                }

                this.countListIndex(this.currentY);
                this.move(this.currentY, true);
            },

            // 计算list数组索引
            countListIndex (pageY) {
                let n = pageY / this.itemHeight;
                n = n > 0 ? 2 - n : Math.abs(n) + 2;
                this.setSelectedValue(n);
            },

            // set选中值
            setSelectedValue (index) {
                const length = this.data.list.length;
                if (length === 0) {
                  this.callback(null);
                  return;
                }
                if (index < 0 || index > length -1) {
                  throw new Error('滑动取值索引数值出现错误'+ index);
                }
                const value = this.data.list[index];
                this.selectedIndex = index;

                this.callback(value)
            },

            // 回调wxChange
            callback (value) {
                this.data.defaultValue = value;
                this.$emit('wxChange', value);
            },

            move (y, bool) {
                const el = this.$refs.wrapper;
                let obj = {
                    styles: {
                        transform: `translateY(${y}px)`,
                        transformOrigin: 'center center'
                    },
                    needLayout: false,
                    delay: 0 //ms
                };
                if (bool) {
                    obj.duration = 300;
                    obj.timingFunction = 'ease-out';
                }
                animation.transition(el, obj);
            },
        },
        watch: {
            'data.list' () {
                this.selectedIndex = this.getInitialIndex();
                this.initMove();
            }
        }
    }
</script>