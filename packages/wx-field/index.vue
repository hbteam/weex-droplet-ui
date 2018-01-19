<template>
    <div class="wx-field" :style="fieldStyles">
        <text :class="[labelPosition=='top'?'wx-text-top':'wx-text']">{{ label }}</text>
        <div class="wx-content" @click="clickHandler">
            <input
                    @input="handleChange"
                    class="wx-input"
                    :type="type"
                    :style="inputStyles"
                    :maxlength="maxlength"
                    :autofocus="autofocus"
                    :disabled="disabled"
                    :value="value"
                    :placeholder="placeholder"/>
            <text class="wx-unit" v-if="unit">{{unit}}</text>
            <div v-if="hasArrow" class="right-arrow"></div>
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
        font-size: 32px;
        color: #4D4D4D;
        width: 180px;
        flex-wrap: nowrap;
    }

    .wx-input {
        font-size: 32px;
        color: #4D4D4D;
        height: 60px;
        flex: 3;
        text-align: left;
    }

    .wx-content {
        flex-direction: row;
        flex: 1;
    }

    .wx-unit {
        width: 50px;
    }

    .right-arrow {
        width: 22px;
        height: 22px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
        border-right-width: 2px;
        border-right-style: solid;
        border-right-color: #DCDCDC;
        margin-right: 4px;
        transform: rotate(-45deg);
    }

    /*label在上边的情况*/
    .wx-text-top {
        width: 750px;
        padding-top: 40px;
        padding-bottom: 40px;
    }

</style>
<script>
    const modal = weex.requireModule('modal')
    export default {
        props: {
            width: {
                type: String,
                default: '750px'
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
                fieldStyles: {}
            }
        },

        created () {
            this.setStyle()
        },

        methods: {
            setStyle () {
                const baseCss = {
                    height: this.height,
                    width: this.width,
                }

                this.fieldStyles = Object.assign({},  baseCss, this.styles)

            },

            handleChange (e) {
                this.$emit('input', e.value)
            },

            clickHandler(){
                if (this.disabled){
                    this.$emit('wxClick')
                }else {
                    return
                }
            }
        }
    }
</script>