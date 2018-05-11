<template>
    <div class="wx-demo">
        <wx-indexlist 
            :items="getData()" 
            @wxChange="handleChange">
        </wx-indexlist>
    </div>
</template>
<script>
    import { WxIndexlist } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        components: {
            WxIndexlist
        },

        data () {
            return {
                
            }
        },

        methods: {
            handleChange (item) {
                console.log(item);
            },

            getData () {
                let list=[];
                for(let i= 0; i < 26; i++){
                    list.push({
                        text: String.fromCharCode(65+i),
                        list: [
                            {
                                text:String.fromCharCode(65+i)+1
                            },{
                                text:String.fromCharCode(65+i)+2
                            },{
                                text:String.fromCharCode(65+i)+3
                            },{
                                text:String.fromCharCode(65+i)+4
                            }
                        ]
                    });
                }
                return list; 
            },
        }
    };
</script>