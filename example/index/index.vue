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

    let componentNameArr = Object.keys(all).map(item => {
        return item.toLowerCase().replace('wx', '');
    });
    componentNameArr = componentNameArr.filter(name => name !== 'checkboxlist')
    
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
                const platform = weex.config.env.platform.toLowerCase();
                if (platform !== 'web') {
                    const url = this.url + `${componentName}/index.native.js`;
                    navigator.push({
                        url: url,
                        animated: "true"
                    });
                } else {
                    const url = this.url + `${componentName}/index.html`;
                    window.location.href = url;
                }
                
            }
        }
    }
</script>
