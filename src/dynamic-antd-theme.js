import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import tinycolor from 'tinycolor2';
import { generateThemeColor, changeAntdTheme, placementSketchPicker } from './core/util';

class DynamicAntdTheme extends Component {
  
  static propTypes = {
    primaryColor: PropTypes.string,
    storageName: PropTypes.string,
    style: PropTypes.object,
    placement: PropTypes.string,
    themeChangeCallback: PropTypes.func,
    customCss: PropTypes.string
  }

  static defaultProps = {
    primaryColor: '#1890ff',
    storageName: 'custom-antd-primary-color',
    style: { display: 'inline-block' },
    placement: '',
    themeChangeCallback: null,
    customCss: ''
  }

  constructor(props) {
    super(props);
    const { primaryColor } = this.props;
    this.state = {
      color: tinycolor(primaryColor).toRgb()
    };
  }

  componentDidMount() {
    const { storageName, themeChangeCallback, customCss } = this.props;
    // initial storage color
    const storageColor = window.localStorage.getItem(storageName);
    if (storageColor) {
      changeAntdTheme(generateThemeColor(storageColor), { customCss });
      document.getElementById('change_antd_theme_color').style.backgroundColor = storageColor;
      if (themeChangeCallback) {
        themeChangeCallback(storageColor);
      }
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.setState({ color: color.rgb }, () => {
      changeAntdTheme(generateThemeColor(color.hex), { customCss: this.props.customCss });
      window.localStorage.setItem(this.props.storageName, color.hex);
      this.props.themeChangeCallback && this.props.themeChangeCallback(color.hex);
    });
  };

  render() {
    const styles = {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`
      },
      swatch: {
        width: '46px',
        maxWidth: '46px',
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer'
      },
      popover: {
        position: 'absolute',
        zIndex: '99999',
        ...placementSketchPicker(this.props.placement)
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    };

    return (
      <div style={this.props.style}>
        <div id='change_antd_theme_button' style={ styles.swatch } onClick={ this.handleClick }>
          <div id='change_antd_theme_color' style={ styles.color } />
        </div>
        {
          this.state.displayColorPicker
            ? <div style={styles.popover}>
            <div style={ styles.cover } onClick={ this.handleClose } />
            <SketchPicker
              color={ this.state.color }
              onChange={ this.handleChange }
            />
          </div> : null
        }
      </div>
    );
  }
}

export { DynamicAntdTheme as default, generateThemeColor, changeAntdTheme }