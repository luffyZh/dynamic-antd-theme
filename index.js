import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import tinycolor from 'tinycolor2';
import { getThemeColor, changeAntdTheme, placementSketchPicker } from './src/util';

export default class index extends Component {
  static propTypes = {
    primaryColor: PropTypes.string,
    storageName: PropTypes.string,
    style: PropTypes.object,
    placement: PropTypes.object
  }
  static defaultProps = {
    primaryColor: '#1890ff',
    storageName: 'custom-antd-primary-color',
    style: { display: 'inline-block' },
    placement: null
  }

  constructor(props) {
    super(props);
    const { primaryColor } = this.props;
    this.state = {
      color: tinycolor(primaryColor).toRgb()
    };
  }

  componentDidMount() {
    const { storageName } = this.props;
    // initial storage color
    const storageColor = window.localStorage.getItem(storageName);
    if (storageColor) {
      changeAntdTheme(getThemeColor(storageColor));
      document.getElementById('change_antd_theme_color').style.backgroundColor = storageColor;
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb }, () => {
      changeAntdTheme(getThemeColor(color.hex));
      window.localStorage.setItem(this.props.storageName, color.hex);
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
