<template>
    <div class="wx-indexlist">
        <scroller :style="{height: getPageHeight() + 'px'}" class="scroller" show-scrollbar="false">
            <div class='eachCategory' v-for='category in items' >
                <text class="category" :ref="'item' + category.text">{{category.text}}</text>
                <text class="item-text" v-for='item in category.list' @click="handleClick(item)">{{item.text}}
                </text>
            </div>
        </scroller>
        <div class='indexList'>
            <text class='indexList-right' @click="scrollTo(category.text)" v-for='category in items'>{{category.text}}</text>
        </div>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    const animation = weex.requireModule('animation');
    const dom = weex.requireModule('dom');
    import mixins from '../utils/mixins';

    export default {
        mixins:[mixins],
        props: {
            items: {
                type: Array,
                default: function () {
                    return [];
                },
                required: true
            },
            wxChange: {
                type: Function,
                required: true
            },
        },

        data () {
            return {
                
            }
        },

        created () {

        },

        methods: {
            scrollTo (text) {
                const el = this.$refs['item' + text][0];
                dom.scrollToElement(el, {})
            },

            handleClick (item) {
                this.$emit('wxChange', item);
            },

        }
    }
</script>

<style scoped>
    .wx-indexlist{
        width: 750px;
    }
    .indexList{
        position: fixed;
        right: 0;
        top: 0;
    }
    .scroller{
        width: 750px;
        /*height: 1000px;*/
    }

    .category {
        color: #666;
        width: 750px;
        height: 60px;
        line-height: 60px;
        background-color: #d3d3d3;
        font-size: 36px;
    }

    .item-text {
        color: #999;
        width: 750px;
        height: 60px;
        line-height: 60px;
        font-size: 32px;
    }

    .indexList-right {
        color: #666;
        font-size: 32px;
        padding-left: 40px;
        padding-right: 10px;
    }
    
</style>
