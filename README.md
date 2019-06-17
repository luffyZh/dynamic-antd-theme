![](https://user-gold-cdn.xitu.io/2019/6/17/16b636d99d4e674e?imageView2/1/w/1304/h/734/q/85/interlace/1)

Dynamic change [Ant-Design](https://ant.design) theme by simpley method.

English | [简体中文](./README_zh_CN.md)

[![Deploy Status](https://circleci.com/gh/zeit/now-desktop.svg?style=shield)](https://dynamic-antd-theme.luffyzh.now.sh/)

## 📦Install

`npm install dynamic-antd-theme` or `yarn add dynamic-antd-theme`


## 🔨Usage

The best usage of the dynamic-antd-theme is in the common compnent (Layout/Header etc...) of your application.

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
### More Example

```

<DynamicAntdTheme primaryColor='#77dd66' />

<DynamicAntdTheme storageName='my-custom-define-color' />

<DynamicAntdTheme style={{ display: 'margin: 10px' }} />


```

## ✨Props

| Props       | Type   | Default                  | Description         |
| ---------- | ------ | --------------------- | ------------ |
| primaryColor   | String | #1890d5 |  your antd initial primary color      |
| storageName   | String |   custom-antd-primary-color  | the name that is saved in the localStorage    |
| style   | Object |  { display: 'inline-block' }  | you can custom the component style simply  |
| placement   | String | bottomRight |  change the color-picker position, `bottom, bottomRight, right, topRight, top, topLeft, left, bottomLeft`|

## ⚠️Attention

**This solution is easy to use, so it is prone to problems. We hope you can give us timely feedback. For example, if there is a problem with any component, we will fix the updated version as soon as possible.**

 - The current version requires your antd version to be lower than v3.19.0
 - ...Plugin versions are updated from time to time based on antd (new antd components are updated)

## 🔗Changelogs

 - v0.1.3
    
    Fix the Slider Component.
 
 - v0.1.4
    
    Fix repeat insert `<style>` tag.
  
 - v0.1.5
  
    Add placement props, `bottom, bottomRight, right, topRight, top, topLeft, left, bottomLeft`. Default is `bottomRight`.