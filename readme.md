# 水滴UI

## install
npm i weex-droplet-ui -S

## playground扫一扫查看demo演示
![扫一扫](https://www.houbank.com/weex/hulu/images/weex-droplet-ui-url.png)

## HTML5 demo演示
[https://hbteam.github.io/weex-droplet-ui/index/index.html](https://hbteam.github.io/weex-droplet-ui/index/index.html)  
![扫一扫](https://www.houbank.com/weex/hulu/images/weex-droplet-ui-weburl.png)


## 关于文档
[https://houbank.github.io/dropletui-docs](https://houbank.github.io/dropletui-docs)

## 联系我们
如您在使用我们的“水滴UI”，有任何问题可以添加微信号springalsky，或者给我们提issue。

## 配置
因未编译成ES5发布到npm，所以webpack.config.js需要配置排除node_modules下包含weex的文件。
```
{
    test: /\.js$/,
    use: [{
      loader: 'babel-loader',
    }],
    exclude: /node_modules(?!\/.*(weex).*)/
}
```

## UI组件代码按需加载
- npm i babel-preset-stage-0 babel-plugin-component -D  
- .babelrc配置如下  
```
{
    "presets": ["es2015", "stage-0"],
    "plugins": [
        [
            "component",
            {
                "libraryName": "weex-droplet-ui",
                "libDir": "packages",
                "style": false
            },
            ...其他UI，如weex-ui
        ]
    ]
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
