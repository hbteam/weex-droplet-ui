<template>
    <div class="wx-indexlist" >
        <div class='mainList'>
            <scroller class='scrollerContainer'>
            <div class='eachCategory' v-for='category in indexList'>
                <div><text>{{category.text}}</text></div>
                <text v-for='item in category.list'>
                    {{item.text}}
                </text>
            </div>
            </scroller>
        </div>
        <div class='indexList'>
            <div class='eachIndex' v-for='category in indexList'>
                <text>{{category.text}}</text>
            </div>
        </div>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    const animation = weex.requireModule('animation');

    export default {
        props: {
            indexList: {
              type: Array,
              default: function () {
                let list=[];
                for(let i=0; i<26; i++){
                    list.push({
                        text:String.fromCharCode(65+i),
                        list:[
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
              }
            }
        },

        data () {
            return {
                
            }
        },

        computed: {
            
        },

        created () {
            
        },

        methods: {
            
        },

        watch: {
            
        }
    }
</script>

<style scoped>
    .wx-indexlist{
        width: 750px;
        height: 600px;
        outline: 1px dashed blue;
        position: relative;
    }
    .indexList{
        position: fixed;
        right: 0;
        top: 0;
    }
    .scrollerContainer{
        
    }
    
</style>
