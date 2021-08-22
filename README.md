![](./dynamic-antd-theme.png)

[![build-passing](https://img.shields.io/badge/build-passing-brightgreen)](https://dynamic-antd-theme-luffyzh.vercel.app/)
![release](https://badgen.net/github/release/luffyZh/dynamic-antd-theme/stable)

A simple plugin to dynamic change [ant-design](https://ant.design) theme whether less or css. 

English | [简体中文](./README_zh_CN.md)

> After gzip: 42.7kB

**This project was initially targeted at 'ant-design', that means it's used in the React project. However, the core style was also applicable to 'ant-design-vue' || 'ant-design-angular'. In addition, for the convenience of one-key and auto use, the color-picker was also packaged into the project, resulting in too large a volume of the project. Aiming at this problem, I develope a new minor version —— [mini-dynamic-antd-theme](https://github.com/luffyZh/mini-dynamic-antd-theme).**

## 🏠 HomePage
[Dynamic-Antd-Theme-Demo](https://dynamic-antd-theme.luffyzh.now.sh/)

## 🌍 Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) |
| --- | --- | --- | --- | --- |
| Chrome 39.0+ ✔ | Edge 12.0+ ✔ | Firefox 30.0+ ✔ | IE 11+ ✔ | Safari 9.1+ ✔ |

## 📦 Install

`npm install dynamic-antd-theme` or `yarn add dynamic-antd-theme`


## 🔨 Usage

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

## ✨ Props

| Props       | Type   | Default                  | Description         |
| ---------- | ------ | --------------------- | ------------ |
| primaryColor   | String | #1890d5 |  your antd initial @primary-color      |
| storageName   | String |   custom-antd-primary-color  | the name that is saved in the localStorage    |
| style   | Object |  null  | you can custom the component style simply  |
| placement   | String | bottomRight |  change the color-picker position, `bottom, bottomRight, right, topRight, top, topLeft, left, bottomLeft`|
| themeChangeCallback   | Func | null | you can do something use themeColor when themeColor changed. |
| customCss   | String | '' | you can define custom css effect any element. |

### How to use the primaryColors in customCss?

You can do this using the following four variables（just like scss）：

 - $primary-color
 - $primary-hover-color
 - $primary-active-color
 - $primary-shadow-color

```
const customCss = `
  .ant-btn {
    font-family: fantasy;
  }
  .custom-title {
    color: $primary-color;
  }
  .custom-title:hover {
    color: $primary-hover-color;
    cursor: pointer;
  }
  #custom-id {
    color: $primary-shadow-color;
  }
`;
```

## 🌞 Export
| export       | Description         |
| ---------- | ------------ |
| default  | The <DynamicAntdTheme /> component   |
| changeAntdTheme   | `param: (color, options)`, change the antd theme. The options specific attributes are as follows： - `storageName`: This can be configured to set storageName when not using picker . - `customCss`: custom Css |

## 🌰 More Example

### Basic Use

```

<DynamicAntdTheme primaryColor='#77dd66' />

<DynamicAntdTheme storageName='my-custom-define-color' />

<DynamicAntdTheme style={{ display: 'margin: 10px' }} />

function themeChangeCallback (color) {
  document.getElementById('my-header-bar').style.backgroundColor = color;
}

<DynamicAntdTheme themeChangeCallback={this.themeChangeCallback} />

```

### Define Custom CSS
```
// define custom css
const customCss = `
  .ant-btn {
    font-family: fantasy;
  }
  .custom-title {
    color: $primary-color;
  }
  .custom-title:hover {
    color: $primary-hover-color;
    cursor: pointer;
  }
  #custom-id {
    color: $primary-shadow-color;
  }
`;

<DynamicAntdTheme
  customCss={customCss}
/>

```
The effects as flow:

![](./custom-css.gif)

### No Color-Picker

> If u don't need the `color-picker`，[mini-dynamic-antd-theme](https://github.com/luffyZh/mini-dynamic-antd-theme) is more suitable for you.

```
import { generateThemeColor, changeAntdTheme } from 'dynamic-antd-theme';
...

<Button
  onClick={
    () => {
      const color = 'blue';
      changeAntdTheme(color);
    }
  }
>Change Theme</Button>
```

## ⚠️ Attention

**This solution is easy to use, so it is prone to problems. We hope you can give us timely feedback. For example, if there is a problem with any component, we will fix the updated version as soon as possible.**

 - The current version requires your antd version to be lower than v3.19.0
   
> The antd version is higher than v3.19.0 you can also use it, if have some problems remember give me an issue. 

 - ...Plugin versions are updated from time to time based on antd (new antd components are updated)

## 🔗 Changelogs

 - v0.1.3
    
    Fix the Slider Component.
 
 - v0.1.4
    
    Fix repeat insert `<style>` tag.
  
 - v0.1.5
  
    Add placement props, `bottom, bottomRight, right, topRight, top, topLeft, left, bottomLeft`. Default is `bottomRight`.
  
 - v0.1.6
  
    Add themeChangeCallback props, you can do something use themeColor when themeColor changed.
  
 - v0.2.0

    Fix ant-design table tr background when cursor hovered.
  
 - v0.2.4

    Support IE 11+.
  
 - v0.2.6
  
    Fix DatePicker current date color.

 - v0.3.0
  
    Export `{ generateThemeColor, changeAntdTheme }` methods to help the developer who don't need react-colorPicker
  
 - v0.3.2
  
    Fix `<Button type='danger' />` bug, when hover the font color is primary-color.
  
 - v0.3.6

    Fix DateRangePicker some bugs.

 - v0.3.7
  
    Fix`table:hover`in antd^3.20.0+

 - v0.3.8

    Fix`calender`some bugs.

 - v0.3.9

    Fix`tree-table-icon`bug.
  
 - v0.4.0

    Add `/examples` for users to use && look for bugs.

 - v0.5.0

    Add `index.d.ts` to support Typescript.

 - v0.6.0

    Add `customCss` Props to support user custom define css.
 
 - v0.7.0

    Add `options` in the  `changeAntdTheme`.
 
 - v0.8.0

    Remove `generateThemeColor`, now `changeAntdTheme` first param only need primary color.

## 🍎 Follow-Up Plan
 
 - More custom type: `border-color`, `border-radius`, etc.

> If you're interested in this repository, Fork/PR/Issue all are welcome.

