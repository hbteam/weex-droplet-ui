<template>
    <div class="wx-progress" :style="outerStyle">
        <text ref="progressBar" class="progress-bar" :style="innerStyle"></text>
    </div>
</template>
<style scoped>
    .wx-progress {
        background-color: #1890ff;
        width: 750px;
        height: 40px;
        position: relative;
        overflow: hidden;
    }

    .progress-bar {
        background-color: #52c41a;
        height: 40px;
        position: absolute;
        top: 0;
        left: -750px;
        z-index: 10;
        width: 750px;
    }

</style>
<script>
    const animation = weex.requireModule('animation');

    export default {
        props: {
            percent: {
                type: Number,
                default: 0
            },
            width: {
                type: String,
                default: '750px'
            },
            animation: {
                type: Boolean,
                default: true
            },
            innerStyle: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            outerStyle: {
                type: Object,
                default: function () {
                    return {}
                }
            },
        },
        data(){
            return {
                progress: '',
            }
        },

        created () {
            this.progress = this.getProgress();
            if (!this.animation) {
                this.defaultProgress(this.progress);
            } 
        },

        mounted () {
            if (this.animation) {
                this.animationProgress(this.progress);
            }
        },

        methods: {

            /**
             * 计算百分比对应的实际进度
             * @return {[type]} [description]
             */
            getProgress () {
                const width = Number(this.width.replace('px', ''));
                return width * (this.percent / 100) + 'px';
            },

            defaultProgress (progress) {
                this.innerStyle.width =  progress;
                this.innerStyle.left =  '0px';
            },

            animationProgress (progress) {
                let el = this.$refs.progressBar;
                animation.transition(el, {
                    styles: {
                        transform: `translateX(${progress})`,
                        transformOrigin: 'center center'
                    },
                    duration: 1000,
                    timingFunction: 'ease-out',
                    needLayout: false,
                    delay: 0 //ms
                });
            }
        },

        watch: {
            percent () {
                this.animationProgress(this.getProgress());
            }
        }
    }
</script>
