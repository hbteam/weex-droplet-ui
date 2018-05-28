<template>
    <div class="wx-input" :style="style">
        <div class="wx-input-icon" v-if="icon">
            <image :style="iconStyle" :src="icon"></image>
        </div>
        <slot name="left"></slot>
        <input 
            class="wx-input-text" 
            :type="type" 
            :placeholder="placeholder" 
            :value="value"
            :disabled="disabled" 
            :autofocus="autofocus" 
            :maxlength="maxlength"
            @input="input" @blur="blur" />
        <div class="wx-input-icon" v-if="tail">
            <image :style="tailStyle" :src="tail"></image>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'text'
            },
            icon: {
                type: String
            },
            tail: {
                type: String
            },
            placeholder: {
                type: String
            },
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            maxlength: {
                type: String
            },
            iconStyle: {
                type: Object
            },
            tailStyle: {
                type: Object
            },
            tailStyle: {
                type: Object
            },
            width: {
                type: String
            }
        },
        data(){
            return {
                style: {
                    width: this.width
                },
                inputValue: '',
            }
        },
        methods: {
            blur (e) {
                this.preventDefault(e);
                this.$emit('wxBlur', this.inputValue);
            },
            input (e) {
                this.preventDefault(e);
                this.inputValue = e.value;
                this.$emit('input', e.value)
                this.$emit('wxInput', this.inputValue);
            }
        }
    }
</script>
<style>
    .wx-input {
        display: flex;
        width: 670px;
        height: 100px;
        background-color: #f8f8f8;
        flex-direction: row;
    }

    .wx-input-icon {
        width: 100px;
        align-items: center;
        justify-content: center;
    }

    .wx-input-text {
        flex: 1;
    }
</style>
