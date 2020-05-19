import { Slider } from 'antd';

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

export default () => (
  <>
    <Slider defaultValue={30} />
    <Slider range defaultValue={[20, 50]} />
    <Slider defaultValue={30} disabled/>
    <br/><br/>
    <Slider defaultValue={30} tooltipVisible />
    <Slider marks={marks} defaultValue={37} />
    <Slider range marks={marks} defaultValue={[26, 37]} />
  </>
)