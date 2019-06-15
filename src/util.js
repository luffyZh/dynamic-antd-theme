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

function getHoverColor (color, index = 5) {
  return tinycolor.mix(
    '#ffffff',
    color,
    currentEasing(index) * 100 / primaryEasing
  ).toHexString();
}

function getActiveColor (color, index = 7) {
  return tinycolor.mix(
    '#333333',
    color,
    (1 - (currentEasing(index) - primaryEasing) / (1 - primaryEasing)) * 100
  ).toHexString();
}

function getShadowColor (color, index = 9) {
  return tinycolor.mix(
    '#888888',
    color,
    (1 - (currentEasing(index) - primaryEasing) / (1 - primaryEasing)) * 100
  ).setAlpha(.2).toRgbString();
}

export function getThemeColor (color) {
  return {
    primaryColor: color,
    hoverColor: getHoverColor(color),
    activeColor: getActiveColor(color),
    shadowColor: getShadowColor(color)
  };
}

export function changeAntdTheme (colorObj) {
  const {
    activeColor,
    primaryColor,
    hoverColor,
    shadowColor
  } = colorObj;
  const cssVar = `
    :root {
      --primary-color: ${primaryColor};
      --primary-hover-color: ${hoverColor};
      --primary-active-color: ${activeColor};
      --primary-shadow-color: ${shadowColor};
    }
  `;
  let styleNode = document.getElementById('dynamic_antd_theme_custom_style');
  if (!styleNode) {
    // avoid repeat insertion
    styleNode = document.createElement('style');
    styleNode.id = 'dynamic_antd_theme_custom_style';
    styleNode.innerHTML = `${cssVar}\n${cssContent}`;
    document.getElementsByTagName('head')[0].appendChild(styleNode);
  } else {
    styleNode.innerHTML = `${cssVar}\n${cssContent}`;
  }
}