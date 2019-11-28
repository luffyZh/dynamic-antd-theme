import { TreeSelect } from 'antd';

const { SHOW_PARENT, TreeNode } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const tProps = {
  treeData,
  treeCheckable: true,
  showCheckedStrategy: SHOW_PARENT,
  searchPlaceholder: 'Please select',
  style: {
    width: '100%',
  },
};

export default () => (
  <>
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
    >
      <TreeNode value="parent 1" title="parent 1" key="0-1">
        <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
          <TreeNode value="leaf1" title="my leaf" key="random" />
          <TreeNode value="leaf2" title="your leaf" key="random1" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
          <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
    <br/><br/>
    <TreeSelect
        showSearch
        style={{ width: '100%' }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
      <br/><br/>
      <TreeSelect {...tProps} />
  </>
)