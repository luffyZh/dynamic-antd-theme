import React, { Component } from 'react';
import { Slider, Switch } from 'antd';

class SliderComp extends Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = (disabled: any) => {
    this.setState({ disabled });
  };

  render() {
    const { disabled } = this.state;
    return (
      <>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </>
    );
  }
}

export default SliderComp;