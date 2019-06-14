# dynamic-antd-theme

Dynamic change ant-design theme by simpley method.

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
