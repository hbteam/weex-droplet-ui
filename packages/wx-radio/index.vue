<template>
    <div class="wx-radio-items" :style="{'flex-direction': direction, 'width': width}">
        <div class="wx-radio-item" 
            v-for="item in optionsData" 
            :style="rowStyle"
            @click="handleClick(item)">
            <text :style="textStyles" v-if="align === 'left'" class="wx-radio-label-right">{{ item.title }}</text>
            <div class="wx-radio"
                :style="getRadioStyle(item)"
                :class="[item.checked ? 'wx-radio-checked' : 'wx-radio-nochecked']">
                <text v-if="item.checked" :style="checkedStyle" class="checked"></text>
            </div>
            <text :style="textStyles" v-if="align === 'right'" class="wx-radio-label-left">{{ item.title }}</text>
        </div>
    </div>
</template>
<style scoped>
    .wx-radio-items {
        flex-direction: row;
        justify-content: space-between;
    }

    .wx-radio-item {
        flex-direction: row;
        align-items: center;
    }

    .wx-radio-label-right {
        padding-right: 10px;
    }

    .wx-radio-label-left {
        padding-left: 10px;
    }

    .wx-radio {
        position: relative;
        border-radius: 40px;
    }

    .wx-radio-checked {
        border-width: 0px;
    }

    .wx-radio-nochecked {
        background-color: #fff;
        border-width: 2px;
        border-style: solid;
        border-color: #ddd;
    }

    .checked {
        background-color: #fff;
        position: absolute;
        z-index: 100;
    }

</style>
<script>
    export default {
        props: {
            width: {
                type: String,
                default: '750px'
            },
            size: {
                type: String,
                default: '44px'
            },
            align: {
                type: String,
                default: 'left'
            },
            direction: {
                type: String,
                default: 'row'
            },
            options: {
                type: Array,
                default: function () {
                    return []
                },
                required: true
            },
            value: {
                type: Object,
                required: true
            },
            checkedColor: {
                type: String,
                default: '#027FF3'
            },
            textColor: {
                type: String,
                default: '#4D4D4D'
            },
            textFontSize: {
                type: String,
                default: '32px'
            }
        },

        data () {
            return {
                checkedStyle: {},
                textStyles: {},
                rowStyle: {},
                optionsData: [],
            }
        },

        created () {
            this.optionsData = JSON.parse(JSON.stringify(this.options));
            this.setCheckedStyle();
            this.setTextStyle();
            this.setRowStyle();
            this.initChecked();
        },

        watch: {
            options () {
                this.optionsData = JSON.parse(JSON.stringify(this.options));
            }
        },

        methods: {
            setTextStyle () {
                this.textStyles = {
                    color: this.textColor,
                    fontSize: this.textFontSize
                };
            },

            setRowStyle () {
                if (this.direction === 'column') {
                    this.rowStyle = { 
                        'width': this.width,
                        'justify-content': 'space-between',
                        'padding-top': '24px',
                        'padding-bottom': '24px',
                        'padding-left': '40px',
                        'padding-right': '40px',
                    }
                }
            },

            setCheckedStyle () {
                const value = Number(this.size.replace('px', '')) / 2;
                const size = value + 'px';
                this.checkedStyle = {
                    height: size,
                    width: size,
                    'border-radius': size,
                    top: value / 2 + 'px',
                    left: value / 2 + 'px',
                };
            },

            getRadioStyle (item) {
                const style = {
                    height: this.size,
                    width: this.size,
                    'border-radius': this.size,
                    'background-color': item.checked ? this.checkedColor : '#fff',
                };
                if (item.disabled) {
                    style['background-color'] = '#d9d9d9';
                }
                return style;
            },

            initChecked () {
                this.optionsData.forEach(item => {
                    if (item.checked) {
                        this.$emit('wxChange', item.value);
                        this.$emit('input', item.value);
                    }
                });
            },

            handleClick (item) {
                if (item.checked || item.disabled) return;
                this.optionsData.forEach(el => {
                    el.checked = false;
                });
                item.checked = true;
                this.$emit('wxChange', item.value);
                this.$emit('input', item.value);
            },
        }
    }
</script>