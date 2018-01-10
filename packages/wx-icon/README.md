## demo

```html
<template>
    <div class="wx-demo">
        <div class="icon-list">
            <div class="icon-cell" v-for="icon in icons">
                <wx-icon
                    :name="icon"
                    :styles="{'font-size':'52px', 'color':'#4d4d4d'}">
                </wx-icon>
                <text>&nbsp;{{icon}}</text>
            </div>
        </div>
    </div>
</template>
<style type="text/css">
    .wx-demo {
        margin-top: 100px;
    }
    .icon-list {
        display: flex;

        flex-direction: row;
    }
    .icon-cell {
        flex: 1;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
</style>
<script>
    import { WxIcon } from '../../index';

    export default {
        components: { WxIcon },

        data () {
            return {
                icons: [
                    'success',
                    'search',
                    'roundclose'
                ]
            }
        },

        created () {

        },

        methods: {

        }
    }
</script>


```