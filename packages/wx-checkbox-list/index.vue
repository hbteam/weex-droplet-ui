<template>
    <div class="wx-checkbox-list" :style="{width: this.width}">
        <div class="cell"  
            :style="{width: this.width, height: '100px'}"
            v-for="item in value" @click="handleClick(item)">
            <text class="wx-text" :style="{'padding-left': padding}">{{ item.title }}</text>
            <wx-checkbox
                 :style="{'padding-right': padding}"
                class="checkbox"
                v-model="item.checked"
                checkedColor="#027FF3">
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
            value: {
                type: Array,
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
        },

        data () {
            return {
                checked: false,
            }
        },

        mounted () {
            this.checked = this.value;
        },

        methods: {
            handleClick (item) {
                item.checked = !item.checked;
                this.$emit('input', this.value);
                this.$emit('wxChange', this.value);
            },
        },
        components: { WxCheckbox }
    }
</script>