# weex-droplet-ui

## install
npm i weex-droplet-ui -S

## playground扫一扫查看demo演示
![扫一扫](https://www.houbank.com/weex/hulu/images/weex-droplet-ui-url.png)

## 联系我们
如您在使用我们的“水滴UI”，有任何问题可以添加微信号springalsky，或者给我们提issue。

## 关于文档
[https://houbank.github.io/dropletui-docs](https://houbank.github.io/dropletui-docs)

## 配置
因未编译成ES5发布到npm，所以webpack配置需要配置排除node_modules/**weex**的文件。
```
{
    test: /\.js$/,
    use: [{
      loader: 'babel-loader',
    }],
    exclude: /node_modules(?!\/.*(weex).*)/
}
```

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