// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// 好 https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/ding-wei-chu-gen-jie-dian-de-wei-zhi-hua-fen-zuo-y/

const buildTree = (preorder, inorder) => {
  // 用指针来代替slice以节省性能
  const helper = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null;
    let rootVal = preorder[p_start]; // 根节点的值
    let root = new TreeNode(rootVal); // 根节点
    let mid = inorder.indexOf(rootVal); // 根节点在inorder的位置
    let leftNum = mid - i_start; // 左子树的节点数
    root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
    root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
    return root;
  };
  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
const buildTree = (preorder, inorder) => {
  // 提前把 inorder 的元素和索引存到哈希表中，用空间换取时间，节省indexOf的时间
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const helper = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null;
    let rootVal = preorder[p_start]; // 根节点的值
    let root = new TreeNode(rootVal); // 根节点
    let mid = map.get(rootVal); // 根节点在inorder的位置
    let leftNum = mid - i_start; // 左子树的节点数
    root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
    root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
    return root;
  };
  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
