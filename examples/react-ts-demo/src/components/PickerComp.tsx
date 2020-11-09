import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

function onChange(date: any, dateString: any) {
  console.log(date, dateString);
}

function onOk(value: any) {
  console.log('onOk: ', value);
}

function PickerComp() {
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} picker="month" />
      <RangePicker picker="month" />
      <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
        onOk={onOk}
      />
    </Space>
  )
}

export default PickerComp;