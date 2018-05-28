<template>
    <div class="wx-dialog" ref="dialog" v-if="visible"
         :class="[useDefaultFooter ? '' : 'opacityFull']" @click="preventDefault">
        <div class="dialog-content" :style="dialogContentStyles">
            <slot name="dialog-header"></slot>
            <slot name="dialog-body"></slot>
            <slot name="dialog-footer"></slot>
            <!-- 默认布局 -->
            <div class="dialog-default" v-if="useDefaultFooter">
                <text class="title" v-if="title">{{ title }}</text>
                <div class="dialog-footer">
                    <text class="flex-1 btn-cancel" @click="cancel">{{ cancelLabel }}</text>
                    <text class="flex-1 btn-confirm" @click="confirm">{{ confirmLabel }}</text>
                </div>
            </div>
        </div>
        <!--添加dialog区域外布局-->
        <slot name="dialog-outer"></slot>
    </div>
</template>
<script>
    const animation = weex.requireModule('animation');
    import mixins from '../utils/mixins'

    export default {
        mixins:[mixins],
        props: {
            visible: {
                type: Boolean,
                required: true,
                default: false
            },

            width: {
                type: String,
                default: '574px'
            },

            cancelLabel: {
                type: String,
                default: '取消'
            },
            confirmLabel: {
                type: String,
                default: '确定'
            },
            useDefaultFooter: {
                type: Boolean,
                default: true
            },

            title: {
                type: String,
                default: ''
            },

            clickConfirmHide:  {
                type: Boolean,
                default: true
            },
        },

        created () {
            this.setStyles()
        },

        methods: {
            setStyles(){
                let baseCss = {
                    width: this.width
                }
                this.dialogContentStyles = Object.assign({}, baseCss)
            },
            cancel (e) {
                this.preventDefault(e);
                if (this.useDefaultFooter) {
                    this.hideDialog(() => {
                        this.$emit('cancel');
                    });
                    return;
                }

                this.$emit('cancel');
            },

            confirm (e) {
                this.preventDefault(e);
                if (this.useDefaultFooter && this.clickConfirmHide) {
                    this.hideDialog(() => {
                        this.$emit('confirm');
                    });
                    return;
                }

                this.$emit('confirm');
            },

            hideDialog (callback) {
                const timer = setTimeout(() => {
                    this.displayDialog(false, callback);
                    clearTimeout(timer);
                }, 40);
            },

            showDialog () {
                const timer = setTimeout(() => {
                    this.displayDialog(true);
                    clearTimeout(timer);
                }, 40);
            },

            displayDialog (isShow, callback) {
                const dialogEl = this.$refs.dialog;
                if (!dialogEl) {
                    return;
                }
                const styles = isShow ? { opacity: 1 } : { opacity: 0 };
                animation.transition(dialogEl, {
                    styles: styles,
                    duration: 200,
                }, function () {
                    typeof callback === 'function' && callback();
                });
            }
        },

        watch: {
            visible () {
                if (this.visible) {
                    this.showDialog();
                }
            }
        }
    }
</script>
<style scoped type="text/css">
    .wx-dialog {
        background-color: rgba(0,0,0,0.35);
        position: fixed;
        left: 0;
        bottom: 0;
        top: 0;
        width: 750px;
        opacity: 0;
        overflow: hidden;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .opacityFull { opacity: 1; }

    .dialog-content {
        width: 574px;
        background-color: #fff;
        border-radius: 6px;
    }

    .dialog-default {
        width: 574px;
        background-color: #fff;
        border-radius: 6px;
    }

    .dialog-footer {
        flex-direction: row;
        height: 80px;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #DEDEDE;
    }

    .flex-1 {
        flex: 1;
        height: 80px;
        font-size: 36px;
        line-height: 80px;
        text-align: center;
        color: #4d4d4d;
    }

    .btn-cancel {
        border-right-width: 1px;
        border-right-style: solid;
        border-right-color: #DEDEDE;
        color: #7A818B;
        font-size: 36px;
    }

    .btn-confirm {
        color: #4676FF;
        font-size: 36px;
    }

    .title {
        width: 574px;
        font-size: 40px;
        color: #7A818B;
        text-align: center;
        padding-top: 96px;
        padding-bottom: 76px;
        padding-left: 40px;
        padding-right: 40px;
    }

</style>