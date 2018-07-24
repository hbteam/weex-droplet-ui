<template>
    <div class="wx-field" :style="fieldStyles" @click="clickHandler">
        <text :class="[labelPosition==='top'?'wx-text-top':'wx-text']" :style="textTitleStyles">{{ label }}</text>
        <div class="wx-content">
            <input
                    v-if="!disabled"
                    @input="oninput" @blur="onblur" @focus="onfocus"
                    class="wx-input"
                    :type="type"
                    :style="inputStyles"
                    :maxlength="maxlength"
                    :autofocus="autofocus"
                    :disabled="disabled"
                    :value="value"
                    :placeholder="placeholder"/>
            <text v-if="disabled" class="wx-input input-label" :style="cliTextStyles">{{value === '' ? placeholder : value}}</text>
            <text class="wx-unit" v-if="unit">{{unit}}</text>
            <wx-icon name="enter" v-if="hasArrow" class="wx-enter"></wx-icon>
        </div>
    </div>
</template>
<style scoped>
    .wx-field {
        width: 750px;
        height: 100px;
        flex-direction: row;
        align-items: center;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
        flex-wrap: wrap;
    }

    .wx-text {
        font-size: 34px;
        color: #333333;
        width: 180px;
        flex-wrap: nowrap;
    }

    .wx-input {
        font-size: 32px;
        color: #333333;
        height: 110px;
        flex: 3;
        text-align: left;
        outline: none;
    }

    .input-label {
        line-height: 110px;
    }

    .wx-content {
        flex-direction: row;
        flex: 1;
        align-items: center;
    }

    .wx-cli-text {
        color: #999999;
        font-size: 32px;
        flex-wrap: nowrap;
    }

    .wx-unit {
        font-size: 32px;
        width: 50px;
    }

    .wx-enter {
        
    }

    .right-arrow {
        width: 22px;
        height: 22px;
        margin-top: 20px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
        border-right-width: 2px;
        border-right-style: solid;
        border-right-color: #DCDCDC;
        /*margin-right: 4px;*/
        transform: rotate(-45deg);
    }

    /*label在上边的情况*/
    .wx-text-top {
        width: 750px;
        padding-top: 40px;
        /*padding-bottom: 40px;*/
        font-size: 34px;
        color: #333333;
    }
</style>
<script>
    import mixins from '../utils/mixins'
    const modal = weex.requireModule('modal')
    import WxIcon from '../wx-icon'

    export default {
        mixins:[mixins],
        components: { WxIcon },
        props: {
            width: {
                type: String,
                default: '750px'
            },
            cliWidth: {
                type: String
            },
            titleWidth: {
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
            inputStyles: {
                type: Object
            },
            label: {
                type: String,
                default: ''
            },
            labelPosition: {
                type: String,
                default: 'left'
            },
            type: {
                type: String,
                default: 'text'
            },
            maxlength: {
                type: String,
                default: '200'
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            unit: {
                type: String
            },
            hasArrow: {
                type: Boolean,
                default: false
            },
            value: {
                type: String
            }
        },

        data () {
            return {
                fieldStyles: {},
                textTitleStyles: {},
                inputValue: '',
            }
        },

        created () {
            this.setStyle()
        },
        watch: {
            'value': function () {
                if(this.value !== ''){
                    this.cliTextStyles.color = '#333333'
                }else{
                    this.cliTextStyles.color = '#999999'
                }
            }
        },

        methods: {
            setStyle () {
                let h = Number(this.height.replace('px', '')) + 1;
                // fieldStyles 样式
                const baseCss = {
                    height: h + 'px',
                    width: this.width,
                }
                this.fieldStyles = Object.assign({},  baseCss, this.styles)

                // cliTextStyles样式
                let width = ''
                if(this.cliWidth != null){
                    width = this.cliWidth
                }else{
                    width = this.width
                }
                const cliTextCss = {
                    width: width.replace('px','') - 26 + 'px',
                    color: this.value === '' ? '#999999' : '#333333'
                }
                this.cliTextStyles = Object.assign({},  cliTextCss)

                if(this.titleWidth ){
                    // textTitleStyles 样式
                    const titleStyles = {
                        width: this.titleWidth
                    }
                    this.textTitleStyles = Object.assign({},  titleStyles)
                }

            },

            oninput (e) {
                this.preventDefault(e);
                this.inputValue = e.value;
                this.$emit('input', this.inputValue);
                this.$emit('wxInput', this.inputValue);
            },

            onblur (e) {
                this.preventDefault(e);
                this.$emit('wxBlur', this.inputValue);
            },

            onfocus (e) {
                this.preventDefault(e);
                this.$emit('wxFocus', this.inputValue);
            },

            clickHandler(e){
                this.preventDefault(e);
                if (this.disabled){
                    this.$emit('wxClick')
                }
            }
        }
    }
</script>