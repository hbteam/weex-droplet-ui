<template>
    <div class="wx-demo">
        <wx-switch 
            class="switch" 
            v-model="value" 
            @wxChange="handleChange" 
            :disabled="false">
        </wx-switch>
        <text>{{ value }}</text>
    </div>
</template>

<style type="text/css">
    .wx-demo {
        flex-direction: column;
        align-items: center;
    }
    .switch {
        margin-top: 100px;
    }
</style>

<script>
    import WxSwitch from '../../packages/wx-switch/index'

    export default {
        data () {
            return {
                value: false,
            }
        },

        methods: {
            handleChange (checked) {

            },

        },

        components: {WxSwitch}
    }
</script>
