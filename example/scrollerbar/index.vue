<template>
    <div>
        <list class="wxs-list" ref="list">
            <cell :class="['wxs-cell', selectIndex == index ? 'select-cell' : 'select-cell-no']"
                  v-for="(item, index) in items" @click="changeTab(index)" ref="cell">
                <div class="wxs-div">
                    <text :class="['wxs-text', selectIndex == index ? 'select-text' : 'select-text-no']">{{item}}</text>
                </div>
            </cell>
        </list>
    </div>
</template>
<script>
    var dom = weex.requireModule('dom')
    var animation = weex.requireModule('animation')
    export default {
        data () {
            return {
                items: ['保单信息1', '保单信息2', '保单信息3', '保单信息4', '保单信息5', '保单信息6',
                    '保单信息7', '保单信息8', '保单信息9', '保单信息10', '保单信息11', '保单信息12'],
                selectIndex: 0,
                bottom: 1,
                top: 1
            }
        },
        methods: {
            changeTab (index) {
                this.selectIndex = index

                let c = this.deviceHeight / 2, m = 125
                let selectItemRef = this.$refs['cell'][index]
                dom.getComponentRect(selectItemRef, item => {
                    let selectItemTop = item.size.top

                    if(selectItemTop > c){
                        dom.getComponentRect(this.$refs['cell'][this.items.length - 1], option => {
                            let listBottom = option.size.bottom
                            if(listBottom - 64 > this.deviceHeight){
                                let q = listBottom - this.deviceHeight
                                this.triggerAnimation(q - c)
                            }
                        })
                    }else{
                        dom.getComponentRect(this.$refs['cell'][0], option => {
                            let listBottom = option.size.bottom - 150
                            console.log('listBottom:',listBottom)
                            console.log('selectItemTop:',selectItemTop)
                            if(listBottom + selectItemTop <= 0){
                                this.triggerAnimation(listBottom + selectItemTop)
                            }
                        })
                    }

                })
            },

            scroller(index){
                let mid = this.deviceHeight / 2
                let move = 125
//                let q =
                let selectItemRef = this.$refs['item'][index]
                dom.getComponentRect(selectItemRef, option => {
                    let selectItemTop = option.size.top
                })
            },


            triggerAnimation(top){
                let el = this.$refs['list']
                animation.transition(el, {
                    styles: {
                        transform: `translateY(${top}px)`,
                        transformOrigin: 'center center'
                    },
                    duration: 300,
                    timingFunction: 'ease-out',
                    needLayout: false,
                    delay: 0 //ms
                });
            }
        },
        created(){
            this.deviceHeight = weex.config.env.deviceHeight
        }
    }
</script>
<style scoped>
    .wxs-list {
        width: 250px;
        background-color: #969696;
    }

    .wxs-cell {
        height: 150px;
        align-items: center;
        justify-content: center;
    }

    .wxs-text {
        color: #ffffff;
        font-size: 32px;
    }

    .select-cell {
        background-color: #ffffff;
    }

    .select-cell-no {
        background-color: #969696;
    }

    .select-text {
        color: #ff8800;
    }

    .select-text-no {
        color: #ffffff;
    }
</style>
