<template>
    <div class="wx-dialog" v-if="visible">
        <div class="dialog-content">
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
    </div>
</template>
<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                required: true,
                default: false
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
            }
        },

        created () {
        },

        methods: {
            cancel () {
                this.$emit('cancel');
            },

            confirm () {
                this.$emit('confirm');
            }
        }
    }
</script>
<style scoped type="text/css">
    .wx-dialog {
        background-color: rgba(0,0,0,0.35);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 750px;
        overflow: hidden;
    }
    .dialog-content {
        width: 574px;
        background-color: #fff;
        border-radius: 6px;
        position: absolute;
        left: 88px;
        top: 300px;
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