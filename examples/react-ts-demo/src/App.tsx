import React from 'react';
import { Button, Steps, Switch } from 'antd';
import DynamicAntdTheme from 'dynamic-antd-theme';
import './App.css';

const { Step } = Steps;

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

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <br />
      <Button type='primary'>Primary</Button>
      <Button style={{ margin: '0 20px' }} type='primary' ghost>Ghost</Button>
      <Button type='primary' danger>Danger</Button>
      <br /><br />
      <h3 className='custom-title'>Test Class Selector</h3>
      <span id='custom-id'>Test ID Selector</span>
      <br /><br />
      <Switch defaultChecked />
      <br /><br />
      <DynamicAntdTheme
        customCss={customCss}
      />
    </div>
  );
}

export default App;
