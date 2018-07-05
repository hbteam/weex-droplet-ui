<template>
    <div class="wx-container" @touchstart="preventDefault">
        <div class="mask wx-overlay" ref="overlay" v-if="visible && hasOverley" @click="hide('event')"></div>
        <div class="wx-popup" v-if="visible" :style="popupStyles" ref="popup">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
    .wx-overlay {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1000;
    }
    .wx-popup {
        background-color: #fff;
        position: fixed;
        z-index: 1001;
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
                default: '400px'
            },

            position: {
                type: String,
                default: 'bottom'
            },

            styles: {
                type: Object,
                default: function () {
                    return {}
                }
            },

            visible: {
                type: Boolean,
                default: false
            },

            duration: {
                type: Number,
                // 300 ms
                default: 300
            },
            hasOverley: {
                type: Boolean,
                default: true
            },

            closeOnClickMask: {
                type: Boolean,
                default: true
            },
        },

        data () {
            return {
                popupStyles: {},
            }
        },

        created () {
            this.setStyle();
            this.overlayAnimate();
        },

        methods: {
            // overlay动画
            overlayAnimate (opacity) {
                if (!this.hasOverley) {
                    return;
                }
                const overlayEl = this.$refs.overlay;
                if (!overlayEl) {
                    return;
                }
                animation.transition(overlayEl, {
                    styles: {
                        opacity: opacity
                    },
                    duration: this.duration,
                    timingFunction: 'ease-out',
                    needLayout: false,
                    delay: 0 //ms
                });
            },

            setStyle () {
                const baseCss = {
                    height: this.height,
                    width: this.width,
                };
                let style = Object.assign(this.getStyle().position, baseCss, this.styles);
                this.popupStyles = style;
            },

            getStyle (xy) {
                let style = {
                    position: {},
                    transform: '',
                };
                switch (this.position) {
                    case 'top':
                        style.transform = `translateY(${xy || this.height})`;
                        style.position = {top:    '-' + this.height};
                        break;
                    case 'bottom':
                        style.transform = `translateY(-${xy || this.height})`;
                        style.position = {bottom: '-' + this.height};
                        break;
                    case 'left':
                        style.transform = `translateX(${xy || this.width})`;
                        style.position = {left:   '-' + this.width, top: '0px'};
                        break;
                    case 'right':
                        style.transform = `translateX(-${xy || this.width})`;
                        style.position = {right:  '-' + this.width, top: '0px'};
                        break;
                }
                return style;
            },

            // popup动画
            popupAnimate (xy) {
                const popupEl = this.$refs.popup;
                if (!popupEl) {
                    return;
                }
                animation.transition(popupEl, {
                    styles: {
                        transform: this.getStyle(xy).transform,
                        transformOrigin: 'center center'
                    },
                    duration: this.duration,
                    timingFunction: 'ease-out',
                    needLayout: false,
                    delay: 0 //ms
                });
            },

            hide (fn) {
                // 如果是点击事件非函数调用
                if (fn === 'event' && !this.closeOnClickMask) return;
                const tm = setTimeout(()=> {
                    this.$emit('wxChange', false);
                    clearTimeout(tm);
                    fn && fn !== 'event' && fn();
                }, this.duration);
                this.popupAnimate('0px');
                this.overlayAnimate(0);
            }
        },
        watch: {
            visible () {
                if (this.visible) {
                    const tm = setTimeout(()=> {
                        this.popupAnimate();
                        this.overlayAnimate(1);
                        clearTimeout(tm);
                    }, 40);
                }
            }
        },
    }
</script>