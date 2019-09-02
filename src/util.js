import Color from 'color';
import cssContent from './theme';

function getHoverColor (color, ratio = 0.5) {
  return Color(color).whiten(ratio).hex();
}

function getActiveColor (color, ratio = 0.7) {
  return Color(color).whiten(ratio).hex();
}

function getShadowColor (color, ratio = 0.9) {
  return Color(color).darken(ratio).rgb().alpha(0.25).toString();
}

export function getThemeColor (color) {
  return {
    primaryColor: color,
    hoverColor: getHoverColor(color),
    activeColor: getActiveColor(color),
    shadowColor: getShadowColor(color)
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

const generateStyleHtml = (colorObj) => {
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
    return `${cssVar}\n${cssContent}`;
  }
  let IECSSContent = cssContent;
  IECSSContent = IECSSContent.replace(/var\(\-\-primary\-color\)/g, primaryColor);
  IECSSContent = IECSSContent.replace(/var\(\-\-primary\-hover\-color\)/g, hoverColor);
  IECSSContent = IECSSContent.replace(/var\(\-\-primary\-active\-color\)/g, activeColor);
  IECSSContent = IECSSContent.replace(/var\(\-\-primary\-shadow\-color\)/g, shadowColor);
  return IECSSContent;
}

export function changeAntdTheme (colorObj) {
  let styleNode = document.getElementById('dynamic_antd_theme_custom_style');
  if (!styleNode) {
    // avoid repeat insertion
    styleNode = document.createElement('style');
    styleNode.id = 'dynamic_antd_theme_custom_style';
    styleNode.innerHTML = generateStyleHtml(colorObj);
    document.getElementsByTagName('head')[0].appendChild(styleNode);
  } else {
    styleNode.innerHTML = generateStyleHtml(colorObj);
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