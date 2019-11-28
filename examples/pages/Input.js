import { Input } from 'antd';

const { Search, TextArea } = Input;

export default () => (
  <>
    <style jsx>{`
      .row { 
        margin: 20px 0;
      }
    `}</style>
    <div className='row'>
      <Input size="large" placeholder="large size" /><br/><br/>
      <Input placeholder="default size" /><br/><br/>
      <Input size="small" placeholder="small size" />
    </div>
    <div className='row'>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <br />
      <br />
      <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
      <br />
      <br />
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
    </div>
    <div className='row'>
      <TextArea rows={4} />
    </div>
    <div className='row'>
      <Search placeholder="input search loading deault" loading />
      <br />
      <br />
      <Search placeholder="input search loading with enterButton" loading enterButton />
    </div>
  </>
)