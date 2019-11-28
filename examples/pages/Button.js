import { Button, Icon } from 'antd';

export default () => (
  <>
    <style jsx>{`
      .row {
        margin: 20px 0;
        display: flex;
        justify-content: space-around;
      }
    `}</style>
    <div className='row'>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
    </div>
    <div className='row'>
      <Button type="primary" size={'small'}>
        Primary
      </Button>
      <Button size={'small'}>Normal</Button>
      <Button type="dashed" size={'small'}>
        Dashed
      </Button>
      <Button type="danger" size={'small'}>
        Danger
      </Button>
      <Button type="link" size={'small'}>
        Link
      </Button>
    </div>
    <div className='row'>
      <Button type="primary" size={'large'}>
        Primary
      </Button>
      <Button size={'large'}>Normal</Button>
      <Button type="dashed" size={'large'}>
        Dashed
      </Button>
      <Button type="danger" size={'large'}>
        Danger
      </Button>
      <Button type="link" size={'large'}>
        Link
      </Button>
    </div>
    <div className='row'>
      <Button type="primary" icon="download" size={'default'} />
      <Button type="primary" shape="circle" icon="download" size={'default'} />
      <Button type="primary" shape="round" icon="download" size={'default'} />
      <Button type="primary" shape="round" icon="download" size={'default'}>
        Download
      </Button>
      <Button type="primary" icon="download" size={'default'}>
        Download
      </Button>
      <br />
      <Button.Group size={'default'}>
        <Button type="primary">
          <Icon type="left" />
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon type="right" />
        </Button>
      </Button.Group>
    </div>
    <div className='row'>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
      <Button type="primary" ghost disabled>
        Primary Ghost(disabled)
      </Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </div>
    <div className='row'>
      <Button type="primary" loading>Primary</Button>
      <Button loading>Default</Button>
      <Button type="dashed" loading>Dashed</Button>
      <Button type="danger" loading>Danger</Button>
      <Button type="link" loading>Link</Button>
    </div>
  </>
);