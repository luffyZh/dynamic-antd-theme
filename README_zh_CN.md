# dynamic-antd-theme

[Ant-Design](https://ant.design) 最简单的动态换肤方案.

[![Deploy Status](https://circleci.com/gh/zeit/now-desktop.svg?style=shield)](https://dynamic-antd-theme.luffyzh.now.sh/)

## 安装

`npm install dynamic-antd-theme` 或 `yarn add dynamic-antd-theme`


## 如何使用

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


```

## 属性

| 属性       | 类型  |  默认值                  | 描述         |
| ---------- | ------ | --------------------- | ------------ |
| primaryColor   | String | #1890d5 |  你当前项目用到的@primary，默认是antd官方的      |
| storageName   | String |   custom-antd-primary-color  | 换存在本地localStorage里面的变量名    |
| style   | Object |  { display: 'inline-block' }  | 可以简单的对组件进行样式设置  |

## 注意⚠️

**该方案因为简易使用，所以容易出现问题，出现问题希望大家及时反馈，比如什么组件有问题，一定尽快修复更新版本。**

 - 目前版本要求你的antd版本低于v3.19.0
 - ...插件版本会根据antd不定时更新（一般antd出新组件会进行更新）

## 更新记录

  - v0.1.3
    
    修复Slider组件的显示问题。
   
  - v0.1.4
    
    避免重复插入`<style>`标签的问题