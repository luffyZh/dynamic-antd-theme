import BezierEasing from 'bezier-easing';
import tinycolor from 'tinycolor2';
import cssContent from './theme';

/* basic-easiing */
const baseEasing = BezierEasing(0.26, 0.09, 0.37, 0.18);

const primaryEasing = baseEasing(0.6);
const currentEasing = index => baseEasing(index * 0.1);

/* tinycolor-mix */
tinycolor.mix = function(color1, color2, amount) {
  amount = (amount === 0) ? 0 : (amount || 50);

  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();

  var p = amount / 100;

  var rgba = {
    r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
    g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
    b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
    a: ((rgb2.a - rgb1.a) * p) + rgb1.a
  };
  return tinycolor(rgba);
};

function generateHoverColor (color, ratio = 5) {
  return tinycolor.mix(
    '#ffffff',
    color,
    currentEasing(ratio) * 100 / primaryEasing
  ).toHexString();
}

function generateActiveColor (color, ratio = 7) {
  return tinycolor.mix(
    '#333333',
    color,
    (1 - (currentEasing(ratio) - primaryEasing) / (1 - primaryEasing)) * 100
  ).toHexString();
}

function generateShadowColor (color, ratio = 9) {
  return tinycolor.mix(
    '#ffffff',
    color,
    (1 - (currentEasing(ratio) - primaryEasing) / (1 - primaryEasing)) * 100
  ).toRgbString();
}

export function generateThemeColor (color) {
  return {
    primaryColor: color,
    hoverColor: generateHoverColor(color),
    activeColor: generateActiveColor(color),
    shadowColor: generateShadowColor(color)
  };
}

// 判断是否是IE系列浏览器
function IEVersion() {
  const userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串  
  const isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; // 判断是否IE<11浏览器  
  const isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判断是否IE的Edge浏览器  
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    const reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6; // IE版本 <= 7
    }   
  } else if (isEdge) {
    return 'edge'; // edge
  } else if (isIE11) {
    return 11; // IE11  
  } else {
    return 0; // 不是ie浏览器
  }
}

const generateCustomCss = customCss => {
  if (typeof customCss !== 'string'
    || (typeof customCss === 'string' && customCss.trim().length === 0)
  ) {
    return '';
  }
  customCss = customCss.replace(/\$primary\-color/g, 'var(--primary-color)');
  customCss = customCss.replace(/\$primary\-hover-color/g, 'var(--primary-hover-color)');
  customCss = customCss.replace(/\$primary\-active-color/g, 'var(--primary-active-color)');
  customCss = customCss.replace(/\$primary\-shadow-color/g, 'var(--primary-shadow-color)');
  return customCss;
}

const generateStyleHtml = (colorObj, customCss, cascadeLayer) => {
  const {
    activeColor,
    primaryColor,
    hoverColor,
    shadowColor
  } = colorObj;
  if (!IEVersion()) {
    const cssVar = `
      :root {
        --primary-color: ${primaryColor};
        --primary-hover-color: ${hoverColor};
        --primary-active-color: ${activeColor};
        --primary-shadow-color: ${shadowColor};
      }
    `;
    const css = `${cssVar}\n${cssContent}\n${generateCustomCss(customCss)}`;
    return cascadeLayer ? `@layer ${cascadeLayer} {${css}}}` : css;
  }
  let IECSSContent = `${cssContent}${generateCustomCss(customCss)}`;
  IECSSContent = IECSSContent.replace(/var\(\-\-primary\-color\)/g, primaryColor);
  IECSSContent = IECSSContent.replace(/var\(\-\-primary\-hover\-color\)/g, hoverColor);
  IECSSContent = IECSSContent.replace(/var\(\-\-primary\-active\-color\)/g, activeColor);
  IECSSContent = IECSSContent.replace(/var\(\-\-primary\-shadow\-color\)/g, shadowColor);
  return IECSSContent;
}

const defaultOptions = {
  customCss: '',
  storageName: '',
}

export function changeAntdTheme (color, options = { ...defaultOptions }) {
  const colorObj = generateThemeColor(color);
  let styleNode = document.getElementById('dynamic_antd_theme_custom_style');
  const { customCss, storageName, cascadeLayer } = options;
  // deal ssr
  if (typeof window !== 'undefined') {
    // 这种方式就是不使用 picker 组件进行调用，也要存一份
    storageName && window.localStorage.setItem('custom-antd-primary-color', colorObj.primaryColor);
  }
  if (!styleNode) {
    // avoid repeat insertion
    styleNode = document.createElement('style');
    styleNode.id = 'dynamic_antd_theme_custom_style';
    styleNode.innerHTML = generateStyleHtml(colorObj, customCss, cascadeLayer);
    document.getElementsByTagName('head')[0].appendChild(styleNode);
  } else {
    styleNode.innerHTML = generateStyleHtml(colorObj, customCss, cascadeLayer);
  }
}

export function placementSketchPicker(placement) {
  switch (placement) {
    case 'bottomRight': {
      return {
        marginLeft: '0px'
      };
    }
    case 'bottom': {
      return {
        marginLeft: '-87px'
      };
    }
    case 'bottomLeft': {
      return {
        marginLeft: '-174px'
      };
    }
    case 'right': {
      return {
        marginLeft: '56px',
        marginTop: '-129px'
      };
    }
    case 'topRight': {
      return {
        marginTop: '-342px'
      }
    }
    case 'top': {
      return {
        marginLeft: '-87px',
        marginTop: '-342px'
      }
    }
    case 'topLeft': {
      return {
        marginLeft: '-174px',
        marginTop: '-342px'
      }
    }
    case 'left': {
      return {
        marginLeft: '-230px',
        marginTop: '-129px'
      }
    }
    default:
      return {
        marginLeft: '0px'
      };
  }
}