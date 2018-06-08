<template>
    <div class="wx-demo">
        <wx-header 
            text="帮助"
            textFontSize="40px" 
            textColor="#333" 
            arrowColor="#333" 
            arrowSize="30px" 
            :hasBottom="true" 
            :useDefaultBack="false" 
            @wxBack="wxBackHandle">
        </wx-header>

        <wx-header 
            text="帮助" 
            :useDefaultBack="false" 
            @wxBack="wxBackHandle">
        </wx-header>
    </div>
</template>
<script>
    import { WxHeader } from '../../index';
    const modal = weex.requireModule('modal');
    const navigator = weex.requireModule('navigator');
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
                navigator.pop({animated: 'true'});
            },
        }
    }
</script>
