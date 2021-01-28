import React from 'react';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value: any) => console.log(value);

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: localStorage.getItem('custom-antd-primary-color') || '#1890ff',
    }}
  />
);

function InputComp() {
  return (
    <>
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        <br/><br/>
        <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
        <br/><br/>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <br/><br/>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <br/><br/>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
    </>
  )
}

export default InputComp;
