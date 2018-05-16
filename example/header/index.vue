<template>
    <div class="wx-demo">
        <wx-header textFontSize="40px" textColor="#333" arrowColor="#333" arrowSize="30px" :hasBottom="true" :useDefaultBack="false" text="帮助" @wxBack="wxBackHandle"></wx-header>

         <wx-header text="帮助" @wxBack="wxBackHandle"></wx-header>
    </div>
</template>
<script>
    import { WxHeader } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        components: {
            WxHeader
        },
        data () {
            return {

            }
        },
        created () {

        },
        methods: {
            wxBackHandle () {
                modal.toast({
                    message: 'back'
                })
            },
        }
    }
</script>
