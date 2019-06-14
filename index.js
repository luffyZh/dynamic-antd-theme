import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import tinycolor from 'tinycolor2';
import { getThemeColor, changeAntdTheme } from './src/util';

export default class index extends Component {
  static propTypes = {
    primaryColor: PropTypes.string,
    storageName: PropTypes.string,
    style: PropTypes.object
  }
  static defaultProps = {
    primaryColor: '#1890ff',
    storageName: 'custom-antd-primary-color',
    style: { display: 'inline-block' }
  }

  constructor(props) {
    super(props);
    const { primaryColor } = this.props;
    this.state = {
      color: tinycolor(primaryColor).toRgb()
    };
  }

  componentDidMount() {
    const storageColor = window.localStorage.getItem(this.props.storageName);
    if (storageColor) {
      changeAntdTheme(getThemeColor(storageColor));
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
    const styles = ReactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div style={this.props.style}>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        {
          this.state.displayColorPicker
            ? <div style={ styles.popover }>
              <div style={ styles.cover } onClick={ this.handleClose }/>
              <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
            </div> : null
        }
      </div>
    );
  }
}
