<template>
    <div class="wx-actionsheet">
        <div
            class="wx-actionsheet-mask"
            v-if="showActionsheet"
            ref="sheetMask"
            @click="close"></div>
        <div
            class="wx-actionsheet-content"
            v-if="showActionsheet"
            ref="sheetContent"
            :style="listStyle">
                <div class="action-list">
                    <div class="action-title bd-btm radius-tl-24 radius-tr-24" v-if="titleText">
                        <text class="f26 c-grey">{{titleText}}</text>
                    </div>
                    <div
                        class="action-item"
                        v-for="(item, index) in actions"
                        :key="index"
                        :class="itemsClass(index)"
                        @click="itemClick(item, index)">
                        <text class="bold" :style="actionStyle">{{item.name}}</text>
                    </div>
                </div>
            <div
                class="action-item bd-btm cancel-button radius-24"
                v-if="cancelText"
                @click="cancel">
                <text :style="cancelStyle">{{cancelText}}</text>
            </div>
        </div>
    </div>
</template>

<script>
    const animation = weex.requireModule('animation');

    export default {
        props: {
            value: {
                type: Boolean,
                default: false
            },
            closeOnClickMask: {
                type: Boolean,
                default: true
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            titleText: {
                type: String,
                default: '标题'
            },
            actions: {
                type: Array,
                default: function () {
                    return []
                },
            },
            actionColor: {
                type: String,
                default: '#0076FF'
            },
            cancelColor: {
                type: String,
                default: '#0076FF'
            },
            actionFontSize: {
                type: String,
                default: '40px'
            },
            cancelFontSize: {
                type: String,
                default: '40px'
            }
        },

        data () {
            return {
                showActionsheet: false,
                mbHeight: 20,
                actionStyle: {},
                cancelStyle: {},
            }
        },

        computed: {
            listStyle () {
                const titleHeight = 92;
                const itemHeight = 114;
                const listHeight = this.actions.length * itemHeight;

                let totalHeight = listHeight + this.mbHeight;
                if (this.titleText) {
                    totalHeight += titleHeight;
                }
                if (this.cancelText) {
                    totalHeight += itemHeight + this.mbHeight;
                }

                const styleObj = { 'height': totalHeight+'px', 'bottom': '-'+ totalHeight + 'px'};

                return styleObj;
            }
        },

        created () {
            this.setStyle();
        },

        methods: {
            setStyle () {
                this.actionStyle = Object.assign({}, {
                                    'color': this.actionColor,
                                    'font-size': this.actionFontSize
                                });
                this.cancelStyle = Object.assign({}, {
                                    'color': this.cancelColor,
                                    'font-size': this.cancelFontSize
                                });

            },

            itemsClass (index) {
                let classArray = [];

                if (index === (this.actions.length-1)) {
                    classArray.push('radius-bl-24');
                    classArray.push('radius-br-24');
                } else {
                    classArray.push('bd-btm');
                }

                if (index === 0 && !this.titleText) {
                    classArray.push('radius-tl-24');
                    classArray.push('radius-tr-24');
                }

                return classArray;
            },

            close () {
                if (!this.closeOnClickMask) {
                    return;
                }
                this.hideSheet();
            },

            itemClick (item, index) {
                if (item.method && typeof item.method === 'function') {
                    item.method(item, index);
                }
                this.hideSheet();
            },

            cancel () {
                this.hideSheet();
            },

            showSheet () {
                this.displaySheetMask(true, () => {
                    this.displaySheetContent(true);
                });
            },

            hideSheet() {
                this.displaySheetContent(false, () => {
                    this.displaySheetMask(false, () => {
                        this.showActionsheet = false;
                    });
                });
            },

            displaySheetMask (isShow, callback) {
                const maskEl = this.$refs.sheetMask;
                if (!maskEl) {
                    return;
                }

                const styles = isShow ? { opacity: 1 } : { opacity: 0 };

                animation.transition(maskEl, {
                    styles: styles,
                    duration: 150,
                }, function () {
                    typeof callback === 'function' && callback();
                });
            },

            displaySheetContent (isShow, callback) {
                const contentEl = this.$refs.sheetContent;
                if (!contentEl) {
                    return;
                }

                const styles = isShow ?
                                { transform: 'translate(0, -100%)' } :
                                { transform: 'translate(0, 100%)' };
                const timingF = isShow ? 'ease' : 'ease-out';
                const duration = isShow ? 150 : 300;

                animation.transition(contentEl, {
                    styles: styles,
                    duration: duration,
                    timingFunction: timingF,
                }, function () {
                    typeof callback === 'function' && callback();
                });
            }
        },

        watch: {
            value(val) {
                if (val) {
                    this.showActionsheet = val;
                    const timer = setTimeout(() => {
                        this.showSheet();
                        clearTimeout(timer);
                    }, 40);
                }
            },

            showActionsheet (val) {
                !val && this.$emit('input', val);
            }
        }
    }
</script>

<style scoped>
    .wx-actionsheet-mask {
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        left: 0;
        bottom: 0;
        top: 0;
        width: 750px;
        opacity: 0;
    }

    .wx-actionsheet-content {
        position: fixed;
        width: 750px;
        left: 0;
    }

    .action-list {
        margin-bottom: 20px;
        width: 710px;
        margin-left: 20px;
    }

    .action-title {
        height: 92px;
        width: 710px;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }

    .action-item {
        height: 114px;
        width: 710px;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }

    .bd-btm {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: rgba(77,77,77,0.78);
    }

    .cancel-button {
        height: 114px;
        width: 710px;
        margin-left: 20px;
    }

    .c-grey { color: #8F8E94; }
    .bold { font-weight: bold; }

    .f26 { font-size: 26px; }

    .radius-24 {
        border-radius: 24px;
    }
    .radius-tl-24 { border-top-left-radius: 24px; }
    .radius-tr-24 { border-top-right-radius: 24px; }
    .radius-bl-24 { border-bottom-left-radius: 24px; }
    .radius-br-24 { border-bottom-right-radius: 24px; }
</style>