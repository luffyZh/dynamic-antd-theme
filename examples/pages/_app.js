import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <title>🌈 Dynamic-Antd-Theme</title>
          <meta descritpion="🌈 A simple plugin to dynamic change ant-design theme whether less or css. " />
          <meta keyword="ant-design, dynamic-theme, css" />
        </Head>
        <Layout path={router.asPath}>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
