<template>
    <div class="loading" v-if="visible" :style="style">
        <div class="loading-pane">
            <image class="icon-loading" :src="url" />
        </div>
    </div>
</template>
<style scoped>
    .loading {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 750px;
        flex-direction: row;
        justify-content: center;
    }

    .loading-pane {
        height: 140px;
        width: 140px;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.8);
        margin-top: 300px;
        border-radius: 20px;
    }

    .icon-loading {
        width: 84px;
        height: 84px;

    }
</style>
<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            top: {
                type: String
            },
            opacity: {
                type: String
            },
            url: {
                type: String,
                default: 'http://p285sfed1.bkt.clouddn.com/loading.gif'
            }
        },
        data(){
            return {
                style: {
                    top:'0px',
                    'background-color': `rgba(0,0,0,0.6)`
                }
            }
        },
        created(){
            if(this.top !== undefined){
                this.style.top = this.top
            }
            if(this.opacity !== undefined){
                this.style['background-color'] = `rgba(0,0,0,${this.opacity})`
            }
        }
    }
</script>
