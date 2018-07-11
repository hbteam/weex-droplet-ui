<template>
    <div class="wx-tabbar">
        <div class="tab-component" :style="{'transform': translateX, width: totalWidth + 'px'}">
            <slot></slot>
        </div>
        <div class="tabbar" 
            :style="getStyles()">
            <div class="tabbar-item" 
                v-for="item in tabItems" 
                @click="changeTab(item)">
                <image :style="getIconStyle(item)" v-if="selectedTab.index === item.index" :src="item.selectedImage" class="icon"></image>
                <image :style="getIconStyle(item)" v-if="selectedTab.index !== item.index" :src="item.image" class="icon"></image>
                <text class="wx-text" :style="getTitleStyle(item)" >{{ item.title }}</text>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .wx-tabbar {
        
    }

    .tab-component {
        flex-direction: row;
        background-color: #fff;
    }   

    .tabbar {
        flex-direction: row;
        width: 750px;
        height: 100px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #D8D8D8;
        background-color: #fff;
    }

    .tabbar-item {
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .icon {
        margin-top: 14px;
        margin-bottom: 10px;
        width: 38px;
        height: 38px;
    }

    .wx-text {
        font-size: 28px;
        padding-top: 2px;
        text-align: center;
        color: #646464;
    }

</style>
<script>
    export default {
        props: {
            tabItems: {
                type: Array,
                default: function () {
                    return []
                },
                required: true
            },

            styles: {
                type: Object,
                default: function () {
                    return {}
                },
                required: false
            },

            height: {
                type: String,
                default: '128px'
            },
        },

        data () {
            return {
                selectedTab: {index: 0},
                translateX: 'translateX(0px)', 
                deviceWidth: 750,
                titleStyle: {},
            }
        },

        created () {
            this.totalWidth = this.deviceWidth * this.tabItems.length;
            this.setTranslateX();
        },

        methods: {
            changeTab (item) {
               this.selectedTab = item;
               this.setTranslateX();
               this.$emit('wxChange', item);
            },

            setTranslateX () {
                const x = this.selectedTab.index * this.deviceWidth;
                this.translateX = `translateX(-${x}px)`;
            },

            getStyles () {
                const baseStyle =  {
                    'height': this.height
                };
                return Object.assign({}, baseStyle, this.styles);
            },

            getIconStyle (item) {
                return {
                    width: item.iconWdith || '38px',
                    height: item.iconHeight || '38px',
                }
            },

            getTitleStyle (item) {
                return {
                    'font-size': item.fontSize || '32px',
                    'color': this.selectedTab.index === item.index ? item.selectedColor : item.titleColor,
                }
            },
        }
    }
</script>