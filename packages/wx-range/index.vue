<template>
    <div class="wx-range" :style="{width: _innerStyle.width, height: _innerStyle.height}">
        <div ref="circle" :style="_circleStyle" class="circle" @panstart="ontouchstart" @panend="ontouchend" @panmove="ontouchmove"></div>
    </div>
</template>
<style scoped>
    .wx-range {
        background-color: #1890ff;
        position: relative;
    }

    .circle {
        background-color: #f5222d;
        position: absolute;
        z-index: 100;
        box-shadow: 0 1px 3px rgba(0,0,0,.4);
    }

</style>
<script>
    const animation = weex.requireModule('animation');

    export default {
        props: {
            width: {
                type: String,
                default: '750px'
            },
            height: {
                type: String,
                default: '10px'
            },
            circleStyle: {
                type: Object,
                default: function () {
                    return {
                        
                    }
                }
            },
            innerStyle: {
                type: Object,
                default: function () {
                    return {}
                }
            },
        },

        data () {
            return {
                startX: 0,
                moveX: 0,
                _circleStyle: {},
                _innerStyle: {},
                data: {
                    width: 0,
                },
                circleSize: '60px'
            }
        },

        created () {
            this.initStyle();
            this.data.width = Number(this._innerStyle.width.replace('px', ''));
        },

        methods: {

            initStyle () {
                const base = {width: this.width, height: this.height};
                this._innerStyle = Object.assign({}, this.innerStyle, base);

                this.circleStyle.width = this.circleStyle.width || this.circleSize;
                this.circleStyle.height = this.circleStyle.height || this.circleSize;

                const circleSize = Number(this.circleStyle.width.replace('px', ''));
                const h = Number(this._innerStyle.height.replace('px', ''));
                const v = circleSize / 2;

                const style = {
                    left: -v + 'px',
                    top: -(v - h/2) + 'px',
                    width: this.circleStyle.width,
                    height: this.circleStyle.height,
                    'border-radius': v + 'px',
                };
                this._circleStyle = Object.assign({}, this.circleStyle, style);
            },

            ontouchstart:function(e) {
                this.startX = e.changedTouches[0].screenX;
            },

            ontouchmove:function(e) {
                const x = Math.floor(e.changedTouches[0].screenX - this.startX);
                if (this.moveX + x > this.data.width) {
                    this.move(this.data.width);
                    return;
                }
                if (this.moveX + x < 0) {
                    this.move(0);
                    return;
                }
                this.move(this.moveX + x);
                this.$emit('input', this.getRange(this.moveX + x));
            },

            getRange (value) {
                return Math.floor(value / this.data.width * 100);
            },

            ontouchend: function(e) {
                // 结束点(即圆圈在x轴移动的距离)
                let endPot = Math.floor(e.changedTouches[0].screenX - this.startX + this.moveX);
                if (endPot <= 0) {
                    endPot = 0;
                }
                if (endPot > this.data.width) {
                    endPot = this.data.width;
                }
                this.moveX = endPot;
                this.$emit('input', this.getRange(this.moveX));
                this.$emit('wxChange', this.getRange(this.moveX));
                // this.move(endPot);
            },

            move (progress) {
                let el = this.$refs.circle;
                animation.transition(el, {
                    styles: {
                        transform: `translateX(${progress}px)`,
                        transformOrigin: 'center center'
                    },
                    duration: 0,
                    needLayout: false,
                    delay: 0 //ms
                });
            },

            /**
             * 设置范围
             * @param {Int} range 0-100数字
             */
            setRange (range) {
                let x = this.data.width * range / 100;
                if (x <= 0) {
                    x = 0;
                }
                if (x > this.data.width) {
                    x = this.data.width;
                }
                this.moveX = x;
                this.move(x);
                this.$emit('input', range);
                this.$emit('wxChange', range);
            },

        }
    }
</script>