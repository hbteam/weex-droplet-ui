<template>
    <div class="wx-search" :style="searchStyle">
        <div class="wx-search-inner" :style="innerStyle">
            <wx-icon name="search" :styles="iconSearchStyle"></wx-icon>
            <input
                class="search-input"
                type="text"
                :placeholder="placeholder"
                @input="input"
                :value="value"
                @focus="focus"
                :class="[showCancel ? 'focus': '']"
                :style="{'background-color': innerBgColor}"
                ref="searchInput" />
        </div>
        <div class="cancel" @click="handleClickCancel">
            <text class="f32" :style="cancelStyle" v-if="showCancel">取消</text>
        </div>
    </div>
</template>
<style scoped>
    .wx-search {
        display: flex;
        flex-direction: row;
        width: 750px;
        height: 88px;
        padding-top: 16px;
        padding-right: 20px;
        padding-bottom: 16px;
        padding-left: 20px;
    }

    .wx-search-inner {
        display: flex;
        flex-direction: row;
        background-color: #fff;
        padding-top: 8px;
        padding-right: 12px;
        padding-bottom: 8px;
        padding-left: 12px;
        border-radius: 4px;
        height: 56px;
    }

    .search-input {
        height: 38px;
        width: 642px;
    }

    .focus {
        width: 542px;
    }

    .cancel {
        width: 100px;
        height: 56px;
        padding-left: 20px;
        justify-content: center;
        align-items: center;
    }

    .f32 { font-size: 32px; }
</style>
<script>
    import WxIcon from '../wx-icon'

    export default {
        props: {
            value: {
                type: String,
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            bgColor: {
                type: String,
                default: '#d9d9d9'
            },
            placeholder: {
                type: String,
                default: '搜索'
            },
            cancelColor: {
                type: String,
                default: '#4d4d4d'
            },
            innerBgColor: {
                type: String,
                default: '#fff'
            }
        },

        data () {
            return {
                searchStyle: {},
                showCancel: false,
                iconSearchStyle: {
                    'font-size': '32px',
                    'color': '#ccc',
                    'height': '33px',
                    'width': '44px',
                    'margin-top': '5px'
                }
            }
        },

        created () {
            this.setStyle();
        },

        methods: {
            setStyle() {
                this.searchStyle = Object.assign({}, {'background-color': this.bgColor});
                this.cancelStyle = Object.assign({}, {'color': this.cancelColor});
                this.innerStyle = Object.assign({}, {'background-color': this.innerBgColor});
            },

            input (e) {
                this.$emit('input', e.value)
            },

            focus () {
                this.showCancel = true;
            },

            handleClickCancel () {
                this.showCancel = false;
                this.$emit('input', '');
                this.$refs.searchInput.blur();
            }
        },

        mounted () {
            this.autofocus && this.$refs.searchInput.focus();
        },

        components: { WxIcon }
    }
</script>