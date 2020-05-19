import { useState } from 'react';
import { Select } from 'antd';
import Head from 'next/head';
import dynamic from 'next/dynamic'

const README_EN = dynamic(() => import('../docs/README.md'));
const README_ZH_CN = dynamic(() => import('../docs/README_zh_CN.md'));


const { Option } = Select;

const Home = () => {
  const [language, setLanguage] = useState('English');
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/static/markdown.css' /> 
      </Head>
      <div className='container'>
        <style jsx>{`
          .container {
            padding-bottom: 50px;
          }
        `}</style>
        <Select 
          value={language}
          style={{ width: 120, paddingBottom: 20 }}
          onChange={value => setLanguage(value)}
        >
          <Option value="English">English</Option>
          <Option value="Chinese">中文</Option>
        </Select>
        <div className='markdown-body'>
          {
            language === 'English'
              ? <README_EN />
              : <README_ZH_CN />
          }
        </div>
      </div>
    </>
  )
}

export default Home;
