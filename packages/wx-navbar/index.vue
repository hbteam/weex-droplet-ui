<template>
    <div class="wx-tabbar"  :style="{width: this.width}">
        <div class="tabbar" :style="{width: this.width, height: this.height}">
            <div class="tabbar-item" 
                :class="[hasBottom ? 'has-bottom-1' : 'no-bottom-1']"
                v-for="item in tabItems" 
                @click="changeTab(item)">
                <text 
                    :style="getTitleStyle(item)"
                    :class="[selectedTab.index === item.index ? 'selected' : 'noselected']"
                    class="wx-title">{{ item.title }}</text>
            </div>
        </div>
        <div v-if="!vif" class="tab-component" :style="{'transform': translateX, width: contentTotalWidth + 'px'}">
            <slot></slot>
        </div>
        <div v-if="vif">
            <slot></slot>
        </div>
        <text class="line" ref="selectedLine" :style="defaultLineStyle"></text>
    </div>
</template>
<style scoped>
    .wx-tabbar {
        background-color: #fff;
    }
    .tab-component {
        flex-direction: row;
        background-color: #fff;
    }   

    .tabbar {
        flex-direction: row;
        background-color: #fff;
    }

    .tabbar-item {
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .wx-title {
        text-align: center;
        font-size: 32px;
    }

    .selected {
        /*font-weight: bold;*/
    }

    .noselected {
        /*font-weight: normal;*/
    }

    .bottom-1 {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: red;
    }
    .nobottom {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #fff;
    }

    .has-bottom-1 {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
    }

    .no-bottom-1 {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #fff;
    }

    .line {
        height: 2px;
        position: absolute;
        left: 0;
        z-index: 100;
    }

</style>
<script>
    import mixins from '../utils/mixins';
    const animation = weex.requireModule('animation');

    export default {
        mixins:[mixins],
        props: {
            // titleColor默认4D4D4D，titleSize默认32px
            tabItems: {
                type: Array,
                default: function () {
                    return []
                },
                required: true
            },

            vif: {
                type: Boolean,
                default: false
            },
            // navbar整体宽度
            width: {
                type: String,
                default: '750px'
            },

            // navbar整体高度
            height: {
                type: String,
                default: '80px'
            },

            hasBottom: {
                type: Boolean,
                default: true
            },

            animated: {
                type: Boolean,
                default: true
            },

            lineStyle: {
                default: function () {
                    return {
                        
                    }
                },
            },
        },

        data () {
            return {
                selectedTab: {index: 0},
                translateX: 'translateX(0px)',
                // navbar宽度，该值等于prop width值 
                barWidth: 750,
                left: 0,
                defaultLineStyle: {
                    width: '120px',
                    'background-color': '#4676FF',
                },
            }
        },

        created () {
            // 计算宽度
            this.barWidth = Number(this.width.replace('px', ''));
            // 不适用vif
            if (!this.vif) {
                this.contentTotalWidth = 750 * this.tabItems.length;
                this.setTranslateX();
            }
            // 添加pos属性，提供偏移动画适用
            this.tabItems.forEach((item, index) => {
                const pos =  this.barWidth / this.tabItems.length * index;
                item.pos = pos;
            });
            // 初始化line style
            this.setLineStyle();
        },

        methods: {

            setLineStyle () {
                const style = {
                    top: Number(this.height.replace('px', '')) - 2 + 'px',
                    left: this.getLeft() + 'px'
                }
                this.defaultLineStyle = Object.assign(style, this.defaultLineStyle, this.lineStyle);
            },

            /**
             * 获得第一个距离左侧left值
             * @return {Number}
             */
            getLeft () {
                let lineWidth = this.lineStyle.width || this.defaultLineStyle.width
                const width = Number(lineWidth.replace('px', ''));
                return (this.barWidth / this.tabItems.length - width) / 2;
            },

            changeTab (item) {
               if (item.index === this.selectedTab.index && (!item.hasOwnProperty('multipleTrigger') || !item['multipleTrigger'])) {
                    return;
               }
               this.$emit('wxChange', item);
               const transform = `translateX(${this.tabItems[item.index].pos}px)`
               this.offsetPos(transform);
               this.selectedTab = item;
               this.setTranslateX();
            },

            setTranslateX () {
                const x = this.selectedTab.index * 750;
                this.translateX = `translateX(-${x}px)`;
            },

            // 设置偏移位置（是否带动画）
            offsetPos (transform) {
                if (this.animated) {
                    this.lineAnimate(transform);
                } else {
                    this.setLineStyle();
                }
            },

            // 选中线的动画
            lineAnimate (transform) {
                const selectedLineEl = this.$refs.selectedLine;
                if (!selectedLineEl) {
                    return;
                }
                animation.transition(selectedLineEl, {
                    styles: {
                        transform: transform,
                        transformOrigin: 'center center'
                    },
                    duration: 300,
                    timingFunction: 'ease-out',
                    needLayout: false,
                    delay: 0 //ms
                });
            },

            getTitleStyle (item) {
                return {
                    color: this.selectedTab.index === item.index ? (item.selectedColor || '#4676FF') :(item.titleColor) || '#7A818B', 
                    'font-size': item.titleSize || '32px'
                };
            }
        }
    }
</script>