<template>
    <div class="wx-cell" @click="handleClick" :style="cellStyles">
        <slot name="left"></slot>
        <image class="icon" v-if="icon" :src="icon"></image>
        <text :style="textStyles" class="wx-text">{{ text }}</text>
        <!--<slot></slot>-->
        <slot name="right"></slot>
        <div v-if="hasArrow" class="right-arrow"></div>
    </div>
</template>
<style scoped>
    .wx-cell {
        height: 100px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
        background-color: #fff;
        flex-direction: row;
        align-items: center;
        /*padding-right: 20px;*/
        /*padding-left: 20px;*/
    }

    .wx-text {
        flex: 1;
        font-size: 32px;
    }

    .icon {
        width: 40px;
        height: 40px;
        margin-right: 20px;
    }

    .right-arrow {
        width: 22px;
        height: 22px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #979797;
        border-right-width: 2px;
        border-right-style: solid;
        border-right-color: #979797;
        margin-right: 4px;
        transform: rotate(-45deg);
    }

</style>
<script>
    import mixins from '../utils/mixins'
    export default {
        mixins:[mixins],
        props: {
            width: {
                type: String
            },
            height: {
                type: String,
                default: '100px'
            },
            styles: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            text: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            hasArrow: {
                type: Boolean,
                default: true
            },
            textColor: {
                type: String,
                default: '#ffffff'
            },
            textFontSize: {
                type: String,
                default: '32px'
            }
        },

        data () {
            return {
                cellStyles: {},
                textStyles: {},
            }
        },

        created () {
             this.setStyle();
        },

        methods: {
            setStyle () {
                const baseCss = {
                    height: this.height,
                    width: this.width,
                };
                this.cellStyles = Object.assign({}, this.styles, baseCss);
                this.textStyles = {
                    color: this.textColor,
                    fontSize: this.textFontSize
                };
            },

            handleClick (e) {
                this.preventDefault(e);
                this.$emit('wxClick', e);
            },
        }
    }
</script>