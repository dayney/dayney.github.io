# 深度查找

## // 给定一个树形数据结构，需要实现一个findPath(treeData, targetKey)函数来查找指定节点的完整路径。
```
const treeData = [
  {
    title: '部门A',
    key: 'dept-a',
    children: [
      {
        title: '小组A1',
        key: 'group-a1',
        children: [
          { title: '员工1', key: 'emp-1' },
          { title: '员工2', key: 'emp-2' },
        ],
      },
      {
        title: '小组A2',
        key: 'group-a2',
        children: [
          { title: '员工3', key: 'emp-3' },
        ],
      },
    ],
  },
  {
    title: '部门B',
    key: 'dept-b',
    children: [
      { title: '员工4', key: 'emp-4' },
    ],
  },
];



function findPath(treeData, targetKey) {
  const path = [];

  const traverse = (nodes) => {
    if (!Array.isArray(nodes)) return false;
    for (const node of nodes) {
      path.push(node.key);
      if (node.key === targetKey) return true;
      if (node.children && traverse(node.children)) return true;
      path.pop();
    }
    return false;
  };

  return traverse(treeData) ? path : [];
}

console.log(findPath(treeData, 'emp-3'));
// 期望输出：['dept-a', 'group-a2', 'emp-3']：3
```