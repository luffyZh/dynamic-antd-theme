import React from 'react';
import { Button, Steps, Switch, Form, Input, Checkbox } from 'antd';
import DynamicAntdTheme, { changeAntdTheme } from 'dynamic-antd-theme';
import SelectComp from './components/SelectComp';
import SliderComp from './components/SliderComp';
import TabComp from './components/TabComp';
import PickerComp from './components/PickerComp';
import './App.css';
import TableComp from './components/TableComp';
import TableSelectComp from './components/TableSelectComp';
import MenuComp from './components/MenuComp';
import RadioComp from './components/RadioComp';
import InputComp from './components/InputComp';

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

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function App() {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="App" style={{ paddingBottom: 20 }}>
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
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <h2>Select:</h2>
      <SelectComp />
      <h2>Slider:</h2>
      <SliderComp />
      <h2>Tab:</h2>
      <TabComp />
      <h2>Picker:</h2>
      <PickerComp />
      <h2>table:</h2>
      <TableComp />
      <h2>table-select:</h2>
      <TableSelectComp />
      <h2>menu:</h2>
      <MenuComp />
      <h2>radio:</h2>
      <RadioComp />
      <h2>Input Search:</h2>
      <InputComp />
      <div style={{ marginTop: 20 }}>
        <DynamicAntdTheme
          customCss={customCss}
        />
        <Button onClick={() => changeAntdTheme('green')}>点我变绿颜色</Button>
      </div>
    </div>
  );
}

export default App;
