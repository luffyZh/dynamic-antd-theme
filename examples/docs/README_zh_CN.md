## 🌍 Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) |
| --- | --- | --- | --- | --- |
| Chrome 39.0+ ✔ | Edge 12.0+ ✔ | Firefox 30.0+ ✔ | IE 11+ ✔ | Safari 9.1+ ✔ |

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
| primaryColor   | String | #1890d5 |  你当前项目用到的@primary-color，默认是antd官方的      |
| storageName   | String |   custom-antd-primary-color  | 缓存在本地localStorage里面的变量名    |
| style   | Object |  { display: 'inline-block' }  | 可以简单的对组件进行样式设置  |
| placement   | String | bottomRight |  改变color-picker的显示位置，有如下值可设置：`bottom, bottomRight, right, topRight, top, topLeft, left, bottomLeft`。|
| themeChangeCallback   | Func | null | 你可以在主题颜色变化的同时传入一个你想修改的自定义callback，用来修改你自己的与主题相关的样式，如Header/Sider这种antd不附带主题色的场景 |

## 🌞 方法
| export       | Description         |
| ---------- | ------------ |
| default  | 默认引入的是 <DynamicAntdTheme /> 组件 |
| getThemeColor   | `param: color`, 根据传入的颜色生成一组颜色对象  |
| changeAntdTheme   | `param: colorObj`, 改变主题的方法 |

#### 示例
```
import { getThemeColor, changeAntdTheme } from 'dynamic-antd-theme';
...

<Button
  onClick={
    () => {
      const color = 'blue';
      changeAntdTheme(
        getThemeColor(color);
      );
    }
  }
>改变主题</Button>
```

## ⚠️ 注意

**该方案因为简易使用，所以容易出现问题，出现问题希望大家及时反馈，比如什么组件有问题，一定尽快修复更新版本。**

 - 目前版本要求你的antd版本低于v3.19.0

> 版本高于v3.19.0也可以使用，如果出现问题，记得提issue，会立刻解决

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
  
  - v0.2.0

    修复ant-design的Table组件，鼠标hover的时候背景色没跟随主题变化

  - v0.2.4
  
    支持IE 11+

  - v0.2.6

    修复了日期选择控件`<DatePicker />`的当前日期颜色问题。

  - v0.3.0
  
    增加了两个方法`{ getThemeColor, changeAntdTheme }`，为了那些不需要类似颜色选择器这种组件的开发者，开发者可以根据自己的需求来进行颜色的改变。
  
  - v0.3.2
  
    修复了`<Button type='danger' />`的bug, 这个bug导致当鼠标hover到`type='danger'`的按钮时，文字颜色会变成主题色，而不是白色.

  - v0.3.6

    修复了`DateRangePicker`的一些bug。

  - v0.3.7

    修复了`table:hover`在antd@^3.20.0版本的样式不匹配问题

  - v0.3.8

    修复了`calender`组件的一些bug。

  - v0.3.9

    修复了树状表格icon颜色不匹配的问题。