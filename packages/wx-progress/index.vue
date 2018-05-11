<template>
    <div class="wx-progress" :style="_outerStyle">
        <text ref="progressBar" class="progress-bar" :style="_innerStyle"></text>
    </div>
</template>
<style scoped>
    .wx-progress {
        background-color: #1890ff;
        position: relative;
        overflow: hidden;
    }

    .progress-bar {
        background-color: #52c41a;
        position: absolute;
        top: 0;
        z-index: 10;
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
            height: {
                type: String,
                default: '40px'
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
                _outerStyle: {},
                _innerStyle: {},
            }
        },

        created () {
            this.initStyle();
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

            initStyle () {
                let base = {
                    width: this.width, 
                    height: this.height,
                };
                this._outerStyle = Object.assign({}, this.outerStyle, base);
                base.left = '-' + this.width;
                this._innerStyle = Object.assign({}, this.innerStyle, base);
            },

            /**
             * 计算百分比对应的实际进度
             * @return {[type]} [description]
             */
            getProgress () {
                const width = Number(this._outerStyle.width.replace('px', ''));
                return width * (this.percent / 100) + 'px';
            },

            defaultProgress (progress) {
                this._innerStyle.width =  progress;
                this._innerStyle.left =  '0px';
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
