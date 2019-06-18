![](https://user-gold-cdn.xitu.io/2019/6/17/16b636d99d4e674e?imageView2/1/w/1304/h/734/q/85/interlace/1)

[Ant-Design](https://ant.design) 最简单的动态换肤方案.

[![Deploy Status](https://circleci.com/gh/zeit/now-desktop.svg?style=shield)](https://dynamic-antd-theme.luffyzh.now.sh/)

## 📦 安装

`npm install dynamic-antd-theme` 或 `yarn add dynamic-antd-theme`


## 🔨 如何使用

最好的方式是将组件安装在公用组件里，这样任何页面都可以使用，进行替换。

例如：Layout组件和Header组件。

> 不是说每个页面都需要进行替换，只需要替换一次即可进行整个项目的替换。

```
// Layout.js
...
import DynamicAntdTheme from 'dynamic-antd-theme';
...

<div className='theme-container'>
  <span>Change antd theme: </span>
  <DynamicAntdTheme />
</div>

```
### 更多示例

```

<DynamicAntdTheme primaryColor='#77dd66' />

<DynamicAntdTheme storageName='my-custom-define-color' />

<DynamicAntdTheme style={{ display: 'margin: 10px' }} />

function themeChangeCallback (color) {
  document.getElementById('my-header-bar').style.backgroundColor = color;
}

<DynamicAntdTheme themeChangeCallback={this.themeChangeCallback} />

```

## ✨ 属性

| 属性       | 类型  |  默认值                  | 描述         |
| ---------- | ------ | --------------------- | ------------ |
| primaryColor   | String | #1890d5 |  你当前项目用到的@primary，默认是antd官方的      |
| storageName   | String |   custom-antd-primary-color  | 换存在本地localStorage里面的变量名    |
| style   | Object |  { display: 'inline-block' }  | 可以简单的对组件进行样式设置  |
| placement   | String | bottomRight |  改变color-picker的显示位置，有如下值可设置：`bottom, bottomRight, right, topRight, top, topLeft, left, bottomLeft`。|
| themeChangeCallback   | Func | null | 你可以在主题颜色变化的同时传入一个你想修改的自定义callback，用来修改你自己的与主题相关的样式，如Header/Sider这种antd不附带主题色的场景 |

## ⚠️ 注意

**该方案因为简易使用，所以容易出现问题，出现问题希望大家及时反馈，比如什么组件有问题，一定尽快修复更新版本。**

 - 目前版本要求你的antd版本低于v3.19.0
 - ...插件版本会根据antd不定时更新（一般antd出新组件会进行更新）

## 🔗 更新记录

  - v0.1.3
    
    修复Slider组件的显示问题。
   
  - v0.1.4
    
    避免重复插入`<style>`标签的问题

  - v0.1.5
  
    增加`placement`属性，该属性可设置如下值：`bottom, bottomRight, right, topRight, top, topLeft, left, bottomLeft`， 默认值是`bottomRight`。

  - v0.1.6
  
    增加 `themeChangeCallback` 属性, 你可以传入一个回调函数(参数是修改后的主题色)，当主题色变化的时候使用主题色做一些事。
