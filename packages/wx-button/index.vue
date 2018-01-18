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
    export default {
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
            styles: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            textColor: {
                type: String,
                default: '#ffffff'
            },
            textFontSize: {
                type: String,
                default: '36px'
            }
        },
        data () {
            return {
                buttonStyles: {},
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
                    'border-radius': this.borderRadius,
                };
                let style = Object.assign({}, baseCss, this.styles);
                this.buttonStyles = style;
                if(this.disabled){
                    this.buttonStyles['background-color'] = 'rgba(0, 0, 0, 0.1)'
                }else {
                    this.buttonStyles['background-color'] = '#4676FF'
                }
                this.textStyles = {
                    color: this.textColor,
                    fontSize: this.textFontSize
                };
            },

            handleClick (e) {
                if (this.disabled) return;
                this.$emit('wxClick', e);
            },
        }
    }
</script>