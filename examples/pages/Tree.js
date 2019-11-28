import { Tree } from 'antd';

const { TreeNode } = Tree;

const onSelect = (selectedKeys, info) => {
  console.log('selected', selectedKeys, info);
};

const onCheck = (checkedKeys, info) => {
  console.log('onCheck', checkedKeys, info);
};

export default () => (
  <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
    >
      <TreeNode title="parent 1" key="0-0">
        <TreeNode title="parent 1-0" key="0-0-0" disabled>
          <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
          <TreeNode title="leaf" key="0-0-0-1" />
        </TreeNode>
        <TreeNode title="parent 1-1" key="0-0-1">
          <TreeNode title={<a>sss</a>} key="0-0-1-0" />
        </TreeNode>
      </TreeNode>
    </Tree>
);