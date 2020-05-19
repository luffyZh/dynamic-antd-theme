import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default () => (
   <>
    <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
    <br/><br/>
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
    <br/><br/>
    <div>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
    </div>
   </>
);