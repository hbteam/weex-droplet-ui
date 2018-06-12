<template>
    <div class="wx-checkbox-list" :style="{width: width}">
        <div class="cell"  
            :style="{width: width, height: height}"
            v-for="item in options" @click="handleClick(item)">
            <text class="wx-text" :style="{'padding-left': padding}">{{ item.title }}</text>
            <wx-checkbox
                 :style="{'padding-right': padding}"
                class="checkbox"
                :disabled="item.disabled"
                v-model="item.checked"
                :checkedColor="checkedColor">
            </wx-checkbox>
        </div>
    </div>
</template>
<style scoped>
    .wx-checkbox-list {

    }
    .cell {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #DCDCDC;
    }

</style>
<script>
    import mixins from '../utils/mixins';
    import WxCheckbox from '../wx-checkbox'

    export default {
        mixins:[mixins],
        props: {
            options: {
                type: Array,
                default: function () {
                    return []
                },
                required: true
            },
            value: {
                type: Array,
                default: function () {
                    return []
                },
                required: true
            },
            width: {
                width: String,
                default: '750px'
            },
            height: {
                width: String,
                default: '100px'
            },
            padding: {
                width: String,
                default: '20px'
            },
            checkedColor: {
                width: String,
                default: '#027FF3'
            },
        },

        created () {
            this.fire();
        },

        methods: {
            handleClick (item) {
                if (item.disabled) return;
                item.checked = !item.checked;
                this.fire();             
            },

            fire () {
                const list = [];
                this.options.forEach(item => item.checked && list.push(item.value));
                this.$emit('input', list);
                this.$emit('wxChange', list);
            }
        },
        components: { WxCheckbox }
    }
</script>