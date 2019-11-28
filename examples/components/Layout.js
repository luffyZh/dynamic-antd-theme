import Router from 'next/router';
import { Layout, Menu, Button } from 'antd';
import DyanamicAntdTheme from 'dynamic-antd-theme';

const AntdComps = [
  {
    href: '/Button',
    title: 'Button 按钮'
  }, {
    href: '/Input',
    title: 'Input 输入框'
  }, {
    href: '/Table',
    title: 'Table 表格'
  }, {
    href: '/DatePicker',
    title: 'DatePicker 日期选择框'
  }, {
    href: '/Radio',
    title: 'Radio 单选框'
  }, {
    href: '/Switch',
    title: 'Switch 开关'
  }, {
    href: '/Slider',
    title: 'Slider 滑动输入条'
  }, {
    href: '/Select',
    title: 'Select 选择器'
  }, {
    href: '/TreeSelect',
    title: 'TreeSelect 树选择器'
  }, {
    href: '/Transfer',
    title: 'Transfer 穿梭框'
  }, {
    href: '/TimePicker',
    title: 'TimePicker 时间选择器'
  }, {
    href: '/Calendar',
    title: 'Calendar 日历'
  }, {
    href: '/Tree',
    title: 'Tree 树形控件'
  }, {
    href: '/Timeline',
    title: 'Timeline 时间轴'
  }
];

const { Item, ItemGroup } = Menu;
const ButtonGroup = Button.Group;
const { Header, Content, Footer, Sider } = Layout;

const layoutStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%'
}
const themeStyle = {
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  borderTop: '2px solid #f0f2f5',
  bottom: 10,
  padding: 10
}
const headerStyle = {
  position:'fixed',
  width: 'calc(100% - 200px)',
  padding: 0,
  background: '#fff', 
  borderLeft: '1px solid #f0f2f5',
  zIndex: 9
}
const siderStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  paddingBottom: 60,
  zIndex: 2
}
const bodyStyle = {
  position: 'absolute',
  width: 'calc(100% - 200px)',
  left: 200,
}
const footerStyle = {
  position: 'fixed',
  width: 'calc(100% - 200px)',
  padding: '20px 40px',
  bottom: 0,
  textAlign: 'center',
}

const theme = 'light';

export default ({ children, path }) => (
  <Layout style={layoutStyle}>
    <style jsx>{`
      :global(.ant-layout-sider-zero-width-trigger) {
        top: initial;
        bottom: 0px;
      }
      :global(.ant-layout-sider-children) {
        overflow-y: auto;
      }
      .logo {
        position: fixed;
        width: 200px;
        top: 0;
        display: flex;
        align-items: center;
        height: 64px;
        padding: 0 10px;
        border-bottom: 1px solid #f0f2f5;
        z-index: 9;
        background: #fff;
      }
      .logo h3 {
        margin: 0;
        padding: 0 10px;
      }
    `}</style>
    <div className="logo">
      <img style={{ width: 40 }} src='/static/antd.svg' />
      <h3>AntD V3.25.3</h3>
    </div>
    <Sider
      theme={theme}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
        console.log(path);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={siderStyle}
    >
      <div style={{ background: '#fff', height: 64 }} />
      <Menu 
        theme={theme}
        mode="inline"
        defaultSelectedKeys={['/']}
        selectedKeys={[path]}
        onClick={({ key }) => Router.push(key)}
      >
        <ItemGroup key='home' title='基础'>
          <Item key='/'>Dynamic-Antd-Theme</Item>
        </ItemGroup>
        <ItemGroup key='comp' title='组件'>
        {
          AntdComps.map(item => (
            <Item key={item.href}>
              {item.title}
            </Item>
          ))
        }
        </ItemGroup>
      </Menu>
      <DyanamicAntdTheme
        placement='topRight'
        style={themeStyle}
      />
    </Sider>
    <Layout style={bodyStyle}>
      <Header style={headerStyle}>
        <h1 style={{ textAlign: 'center', fontSize: 30 }}><a>Dynamic-Antd-Theme</a></h1>
      </Header>
      <Content style={{ margin: '80px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={footerStyle}>
        <ButtonGroup>
          <Button onClick={() => window.open('https://github.com/luffyZh')} type='primary' ghost>@author luffyZh</Button>
          <Button onClick={() => window.open('https://github.com/luffyZh/dynamic-antd-theme/')} type='primary'>go to star&nbsp;🌟</Button>
        </ButtonGroup>
      </Footer>
    </Layout>
  </Layout>
)