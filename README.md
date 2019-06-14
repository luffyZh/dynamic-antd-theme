# dynamic-antd-theme

Dynamic change [Ant-Design](https://ant.design) theme by simpley method.

Go to the [README_zh_CN](./README_zh_CN.md)

## Install

`npm install dynamic-antd-theme` or `yarn add dynamic-antd-theme`


## How to use

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

## Props

| Props       | Type   | default                  | Description         |
| ---------- | ------ | --------------------- | ------------ |
| primaryColor   | String | #1890d5 |  your antd initial primary color      |
| storageName   | String |   custom-antd-primary-color  | the name that is saved in the localStorage    |
| style   | Object |  { display: 'inline-block' }  | you can custom the component style simply  |

## Attention⚠️

**This solution is easy to use, so it is prone to problems. We hope you can give us timely feedback. For example, if there is a problem with any component, we will fix the updated version as soon as possible.**

 - The current version requires your antd version to be lower than v3.19.0
 - ...Plugin versions are updated from time to time based on antd (new antd components are updated)

## Update Records

 - v0.1.3
    Fix the Slider Component