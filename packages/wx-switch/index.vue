<template>
    <div class="wx-switch" 
        :class="{'switch-off': !opened}"
        :style="{'background-color': opened ? '#1890ff' : '#e2e2e2'}"
        ref="switch"
        @click="handleClick">
        <text class="blk" ref="blk"></text> 
    </div>
</template>
<style scoped>
    .wx-switch {
        position: relative;
        width: 120px;
        height: 64px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 26px;
        padding-right: 26px;
        border-radius: 64px;
        border-width: 1px;
        border-style: solid;
        border-color: #ddd;
    }
    
    .blk {
        position: absolute;
        top: 4px;
        left: 0px;
        height: 52px;
        width: 56px;
        background-color: #fff;
        border-radius: 52px;
    }

    .switch-off {
        background-color: #e2e2e2;
        border-color: #ccc;
    }

</style>
<script>
    const animation = weex.requireModule('animation');

    export default {
        props: {
            value: {
                type: Boolean,
            },
        },

        data () {
            return {
                opened: false
            }
        },

        mounted () {
            this.opened = this.value;
            this.blkAnimation(true);
        },

        methods: {
            handleClick () {
                this.opened = !this.opened;
                this.animation();
                this.blkAnimation();
            },

            animation () {
                let el = this.$refs.switch;
                let color = this.opened ? '#1890ff' : '#e2e2e2';
                animation.transition(el, {
                    styles: {
                        'backgroundColor': color,
                        'transition-property': 'background-color',
                    },
                    duration: 150,
                    timingFunction: 'linear',
                    needLayout: false,
                    delay: 0
                });
            },

            blkAnimation (isInit = false) {
                let el = this.$refs.blk;
                let x = this.opened ? '58px' : '0px';
                animation.transition(el, {
                    styles: {
                        transform: `translate(${x})`,
                    },
                    duration: isInit ? 0 : 150,
                    timingFunction: 'linear',
                    needLayout: false,
                    delay: 0
                }, () => {
                    this.$emit('wxChange', this.opened);
                    this.$emit('input', this.opened);
                });
            },
        }
    }
</script>