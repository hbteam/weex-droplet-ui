<template>
    <div class="wx-input" :style="style">
        <div class="wx-input-icon" v-if="icon">
            <image :style="iconStyle" :src="icon"></image>
        </div>
        <slot name="left"></slot>
        <input 
            class="input"
            :style="{'background-color': bgColor}"
            :type="type" 
            :placeholder="placeholder" 
            :value="value"
            :disabled="disabled" 
            :autofocus="autofocus" 
            :maxlength="maxlength"
            @input="oninput" @blur="onblur" @focus="onfocus" />
        <div class="wx-input-icon" v-if="tail">
            <image :style="tailStyle" :src="tail"></image>
        </div>
    </div>
</template>
<script>
    import mixins from '../utils/mixins';
    const modal = weex.requireModule('modal');

    export default {
        mixins:[mixins],
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
            width: {
                type: String
            },
            bgColor: {
                type: String,
                default: '#f8f8f8'
            },
        },
        data(){
            return {
                style: {
                    width: this.width,
                    'background-color': this.bgColor
                },
                inputValue: '',
            }
        },
        methods: {
            onblur (e) {
                this.preventDefault(e);
                this.$emit('wxBlur', this.inputValue);
            },
            oninput (e) {
                this.preventDefault(e);
                this.inputValue = e.value;
                this.$emit('input', e.value)
                this.$emit('wxInput', this.inputValue);
            },

            onfocus (e) {
                this.preventDefault(e);
                this.$emit('wxFocus', this.inputValue);
            },
        }
    }
</script>
<style>
    .wx-input {
        display: flex;
        width: 670px;
        height: 100px;
        flex-direction: row;
    }

    .wx-input-icon {
        width: 100px;
        align-items: center;
        justify-content: center;
    }

    .input {
        flex: 1;
    }
</style>
