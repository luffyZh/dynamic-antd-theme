import { DatePicker } from 'antd';

const { RangePicker, MonthPicker, WeekPicker } = DatePicker;

export default () => (
  <>
    <DatePicker onChange={(date, dateString) => console.log(dateString)} />
    <br/><br/>
    <RangePicker onChange={(date, dateString) => console.log(dateString)} />
    <br/><br/>
    <MonthPicker onChange={(date, dateString) => console.log(dateString)} />
    <br/><br/>
    <WeekPicker onChange={(date, dateString) => console.log(dateString)} />
  </>
)