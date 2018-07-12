<template>
    <div class="wx-switch" 
        :style="{'background-color': checked ? checkedColor : '#d9d9d9'}"
        @click="handleClick">
        <text ref="switchCore" class="switch-core" :style="corestyle"></text>
        <text class="blk" ref="blk" :style="blkStyle"></text> 
    </div>
</template>
<style scoped>
    .wx-switch {
        position: relative;
        width: 104px;
        height: 64px;
        border-radius: 64px;
        border-width: 1px;
        border-style: solid;
        border-color: #ddd;
        background-color: #d9d9d9;
    }
    
    .blk {
        position: absolute;
        top: 5px;
        left: 0px;
        z-index: 100;
        height: 52px;
        width: 56px;
        background-color: #fff;
        border-radius: 52px;
    }

    .switch-core {
        position: absolute;
        top: 0;
        width: 102px;
        height: 62px;
        background-color: #fdfdfd;
        border-radius: 62px;
    }

</style>
<script>
    import mixins from '../utils/mixins';
    const animation = weex.requireModule('animation');

    export default {
        mixins:[mixins],
        props: {
            value: {
                type: Boolean,
            },
            disabled: {
                type: Boolean,
            },

            checkedColor: {
                type: String,
                default: '#027FF3',
            }
        },

        data () {
            return {
                checked: false,
                blkStyle: {},
                corestyle: {},
            }
        },

        created () {
            this.initStyle();
        },

        mounted () {
            this.checked = this.value;
            this.blkAnimation(true);
            this.animation(true);
        },

        methods: {
            handleClick (e) {
                this.preventDefault(e);
                if (this.disabled) return;
                this.checked = !this.checked;
                this.animation();
                this.blkAnimation();
            },

            animation (isInit = false) {
                let el = this.$refs.switchCore;
                // 设置为0.1 解决奇怪的Y轴会覆盖点击问题
                let s = this.checked ? '0.1' : '1';
                animation.transition(el, {
                    styles: {
                        transform: `scale(${s})`
                    },
                    duration: isInit ? 0 : 300,
                    timingFunction: 'linear',
                    needLayout: false,
                    delay: 0
                });
            },

            blkAnimation (isInit = false) {
                let el = this.$refs.blk;
                let x = this.checked ? '42px' : '0px';
                animation.transition(el, {
                    styles: {
                        transform: `translateX(${x})`
                    },
                    duration: isInit ? 0 : 300,
                    timingFunction: 'linear',
                    needLayout: false,
                    delay: 0
                }, () => {
                    this.$emit('wxChange', this.checked);
                    this.$emit('input', this.checked);
                });
            },

            // android不支持阴影
            initStyle () {
                const platform = weex.config.env.platform.toLowerCase();
                if (platform === 'android') {
                    this.blkStyle = {
                        'border-width': '1px',
                        'border-style': 'solid',
                        'border-color': '#d9d9d9',
                    }
                } else {
                    this.blkStyle = {
                        'box-shadow': '0 1px 3px rgba(0,0,0,.4)',
                        top: '5px'
                    }
                    if (platform === 'web') {
                        this.corestyle = {
                            width: '100px',
                            height: '60px',
                            'border-radius': '60px',
                        }
                        this.blkStyle.top = '4px';
                    }
                }
            }
        }
    }
</script>