<template>
    <scroller class="cell" show-scrollbar="false">
        <wx-cell 
            v-for="name in componentNameArr"
            :text="name" 
            icon=""
            height="100px"
            textColor="#333"
            textFontSize="32px"
            @wxClick="go(name)">
        </wx-cell>
    </scroller>
</template>
<style type="text/css">
    .cell {
        width: 690px;
        margin-left: 30px;
    }
</style>
<script>
    import { WxCell } from '../../index';
    import * as all from '../../index';
    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');

    const componentNameArr = Object.keys(all).map(item => {
        return item.toLowerCase().replace('wx', '');
    });
    
    export default {
        components: { WxCell },
        data () {
            return {
                url: 'https://hbteam.github.io/weex-droplet-ui/',
                componentNameArr: componentNameArr,
            }
        },

        methods: {
            go (componentName) {
                const url = this.url + `${componentName}/index.native.js`;
                navigator.push({
                    url: url,
                    animated: "true"
                },event => {
                    modal.alert({ message: 'callback: ' + event })
                });
            }
        }
    }
</script>
