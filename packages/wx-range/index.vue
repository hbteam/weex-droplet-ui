<template>
    <div class="wx-range" @touchstart="preventDefault" @touchmove="preventDefault" :style="_wrapStyle">
        <div class="range-inner" :style="_innerStyle">
            <div class="range-outer" ref="rangeOuter" :style="_outerStyle"></div>
        </div>
        <div ref="circle" :style="_circleStyle" class="circle" @panstart="ontouchstart" @panend="ontouchend" @panmove="ontouchmove"></div>
    </div>
</template>
<style scoped>
    .wx-range {
        background-color: #fff;
        position: relative;
    }

    .range-inner {
        position: relative;
        overflow: hidden;
        background-color: #1890ff;
    }

    .range-outer {
        position: absolute;
        z-index: 100;
        background-color: #1890ff;
    }

    .circle {
        background-color: #f5f5f5;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
        box-shadow: 0 1px 3px rgba(0,0,0,.4);
    }

</style>
<script>
    import mixins from '../utils/mixins';
    const animation = weex.requireModule('animation');

    export default {
        mixins:[mixins],
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
            outerStyle: {
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
                _outerStyle: {},
                _wrapStyle: {},
                data: {
                    width: 0,
                },
                circleSize: '60px'
            }
        },

        created () {
            this.initStyle();
        },

        methods: {

            initStyle () {
                this.circleStyle.width = this.circleStyle.width || this.circleSize;
                this.circleStyle.height = this.circleStyle.height || this.circleSize;
                const circleSize = Number(this.circleStyle.width.replace('px', ''));
                const v = circleSize / 2;

                const h = Number(this.height.replace('px', ''));

                // _innerStyle
                const base = {width: this.width, height: this.height, 'margin-top': v - h/2 +'px', 'margin-left': v + 'px' };
                this._innerStyle = Object.assign({}, this.innerStyle, base);
                console.log(this._innerStyle)
                this.data.width = Number(this._innerStyle.width.replace('px', ''));

                // _circleStyle
                this._circleStyle = Object.assign({}, this.circleStyle, {
                    width: this.circleStyle.width,
                    height: this.circleStyle.height,
                    'border-radius': v + 'px',
                });

                // _outerStyle
                this._outerStyle = Object.assign({}, this.outerStyle, {
                    left: '-' + this._innerStyle.width,
                    width: this._innerStyle.width,
                    height: this._innerStyle.height,
                });
                this._wrapStyle = {
                    width: this.data.width + circleSize + 'px',
                    height: this._circleStyle.height,
                    'background-color': '#fff',
                }
            },

            ontouchstart:function(e) {
                this.preventDefault(e);
                this.startX = e.changedTouches[0].screenX;
            },

            ontouchmove:function(e) {
                this.preventDefault(e);
                const x = Math.floor(e.changedTouches[0].screenX - this.startX);
                if (this.moveX + x > this.data.width) {
                    this.move(this.$refs.circle, this.data.width);
                    this.move(this.$refs.rangeOuter, this.data.width);
                    return;
                }
                if (this.moveX + x < 0) {
                    this.move(this.$refs.circle, 0);
                    this.move(this.$refs.rangeOuter, 0);
                    return;
                }
                this.move(this.$refs.circle, this.moveX + x);
                this.move(this.$refs.rangeOuter, this.moveX + x);
                this.$emit('input', this.getRange(this.moveX + x));
            },

            getRange (value) {
                return Math.floor(value / this.data.width * 100);
            },

            ontouchend: function(e) {
                this.preventDefault(e);
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

            move (el, progress) {
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
                this.move(this.$refs.circle, x);
                this.move(this.$refs.rangeOuter, x);
                this.$emit('input', range);
                this.$emit('wxChange', range);
            },

        }
    }
</script>