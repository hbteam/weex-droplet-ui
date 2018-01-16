# weex-droplet-ui

## install
npm i weex-droplet-ui -S

## 运行查看example
npm start  
所有的组件demo都在example中，npm start运行可查看组件具体使用方法。

## 联系我们
如您在使用我们的“水滴UI”，有任何问题可以添加微信号springalsky，我们将为您解答疑问，也可以酌情给您添加您需要的组件，添加口令“天王盖地虎”.

## 关于文档
文档后续会补充，我们还会补充很多常用的组件

## Usage
  
```html
<template>
    <div>
        <wx-button @wxClick="handleClick">点击测试</wx-button>
    </div>
</template>

<script>
    import { WxButton } from 'weex-droplet-ui';
    const modal = weex.requireModule('modal');
    // import WxButton from 'weex-droplet-ui/packages/wx-button';
    export default {
        components: { WxButton },
        methods: {
            handleClick () {
                modal.toast({
                    message: 'test'
                });
            }
        }
    };
</script>
```