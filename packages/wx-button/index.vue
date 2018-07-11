<template>
    <div class="wx-button" @click="handleClick" :style="buttonStyles">
        <text class="wx-text" :style="textStyles">
            <slot></slot>
        </text>
    </div>
</template>
<style>
    .wx-button {
        background-color: #4676FF;
        /*box-shadow: 0 2px 8px 0 rgba(70,118,255,0.60);*/
        align-items: center;
        justify-content: center;
    }
    .wx-text {
        color: #ffffff;
        font-size: 32px;
    }
</style>
<script type="text/javascript">
    import '../utils/finally';
    import mixins from '../utils/mixins';

    export default {
        mixins:[mixins],
        props: {
            width: {
                type: String,
                default: '670px'
            },
            height: {
                type: String,
                default: '90px'
            },
            borderRadius: {
                type: String,
                default: '12px'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            disableOnPromise: {
                type: Function
            },
            styles: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            disabledBgColor: {
                type: String,
                default: 'rgba(0, 0, 0, 0.1)'
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
                buttonStyles: {},
                textStyles: {},
                promiseDisabled: false,
                defualtBgColor: '#4676FF',
            }
        },
        created () {
            this.promiseDisabled = this.disabled;
            this.setStyle();
        },
        watch: {
            'disabled': function () {
                this.btnStyle(this.disabled);
            }
        },
        methods: {
            setStyle () {
                const baseCss = {
                    height: this.height,
                    width: this.width,
                    'border-radius': this.borderRadius,
                    'background-color': this.defualtBgColor
                };
                let style = Object.assign({}, baseCss, this.styles);
                this.buttonStyles = style;
                this.defualtBgColor = this.buttonStyles['background-color'];
                if(this.disabled){
                    this.buttonStyles['background-color'] = this.disabledBgColor
                }
                this.textStyles = {
                    color: this.textColor,
                    fontSize: this.textFontSize
                };
            },

            handleClick (e) {
                this.preventDefault(e);
                if (this.disabled || this.promiseDisabled) return;
                if (this.disableOnPromise) {
                    const _promise = this.disableOnPromise();
                    this.disablePromise(_promise);
                } else {
                    this.$emit('wxClick', e);
                }
                
            },

            disablePromise (_promise) {
                this.btnStyle(true)
                _promise.finally(() => {
                    this.btnStyle(false);
                });
            },

            btnStyle (disabled) {
                this.promiseDisabled = disabled;
                if(disabled){
                    this.buttonStyles['background-color'] = this.disabledBgColor
                }else{
                    this.buttonStyles['background-color'] = this.defualtBgColor;
                }
            },
        }
    }
</script>