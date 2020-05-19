import React from 'react';
import { Empty } from 'antd';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Empty style={{ marginTop: 60 }} description='Not Found 404' />
    );
  }
}