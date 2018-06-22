<template>
    <div class="wx-header" :class="[hasBottom ? 'bottom-border': 'no-border']">
        <!-- default -->
        <slot>
            <div class="header-title">
                <text class="title" :style="getTitleStyle()">{{ text }}</text>
            </div>
            <div class="header-arrow" 
                @click="handleClick"
                ref="arrow" 
                v-if="hasBackIcon">
                <text :style="getArrowStyle()" class="icon-arrow-left"></text>
            </div>
        </slot>
        <!-- customer slot layout 'left center right' -->
        <slot name="header-left"></slot>
        <slot name="header-center"></slot>
        <slot name="header-right"></slot>
    </div>
</template>
<style scoped>
    .wx-header {
        height: 100px;
        background-color: #fff;
    }

    .bottom-border {
        border-bottom-width: 1px;  
        border-style: solid;  
        border-color:  #DCDCDC;  
    }

    .no-border {
        border-bottom-width: 0px; 
    }

    .header-arrow {
        position: absolute;
        left: 0px;
        top: 0px;
        /*browser*/
        z-index: 100;
        width: 100px;
        height: 100px;
        justify-content: center;
    }

    .icon-arrow-left {
        border-right-width:3px ;
        border-right-style: solid;
        border-right-color: #4676FF;
        border-bottom-style: solid;
        border-bottom-width: 3px;  
        border-bottom-color:  #4676FF; 
        transform: rotate(135deg); 
        margin-left: 46px;
    }

    .header-title {
        width: 750px;
        height: 100px;
    }

    .title {
        width: 750px;
        font-size: 44px;
        text-align: center;
        color: #333333;
        height: 100px;
        line-height: 100px;
    }
    
</style>
<script>
    import mixins from '../utils/mixins';
    const animation = weex.requireModule('animation');
    const navigator = weex.requireModule('navigator');

    export default {
        mixins:[mixins],
        props: {
            hasBackIcon: {
                type: Boolean,
                default: true
            },
            text: {
                type: String,
                default: ''
            },
            useDefaultBack: {
                type: Boolean,
                default: true
            },
            hasBottom: {
                type: Boolean,
                default: false
            },

            textColor: {
                type: String,
                default: '#333333'
            },

            textFontSize: {
                type: String,
                default: '44px'
            },

            arrowColor: {
                type: String,
                default: '#4676FF'
            },

            arrowSize: {
                type: String,
                default: '32px'
            },
        },

        created () {

        },

        methods: {
            getTitleStyle () {
                return {
                    color: this.textColor,
                    'font-size': this.textFontSize,
                };
            },

            getArrowStyle () {
                return {
                    'border-right-color': this.arrowColor,
                    'border-bottom-color': this.arrowColor,
                    width: this.arrowSize,
                    height: this.arrowSize,
                }
            },

            handleClick (e) {
                this.preventDefault(e);
                this.animated();
            },

            animated () {
                const el = this.$refs.arrow;
                animation.transition(el, {
                    styles: {
                        opacity: '0.5',
                    },
                    duration: 200,
                    timingFunction: 'ease-in',
                    needLayout: false,
                    delay: 0
                }, () => {
                    if (this.useDefaultBack) {
                        if (this.$router && this.$router.back) {
                            this.$router.back();
                        } else {
                            navigator.pop({animated: 'true'});
                        }
                    } else {
                        this.$emit('wxBack');
                    }
                });
            },
        }
    }
</script>