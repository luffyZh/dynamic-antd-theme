import React from 'react';
import { Button, Steps, Switch } from 'antd';
import DynamicAntdTheme, { generateThemeColor, changeAntdTheme } from 'dynamic-antd-theme';
import './App.css';

const { Step } = Steps;

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <Button type='primary'>测试</Button>
      <Switch defaultChecked />
      <br />
      <DynamicAntdTheme />
    </div>
  );
}

export default App;
