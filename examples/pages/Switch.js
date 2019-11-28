import { Switch } from 'antd';

export default () => (
  <>
    <Switch defaultChecked />
    <br/><br/>
    <Switch size="small" defaultChecked />
    <br/><br/>
    <Switch disabled/>
    <br/><br/>
    <Switch loading defaultChecked />
    <br/><br/>
    <Switch size="small" loading />
    <br/><br/>
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br/><br/>
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br/><br/>
  </>
)