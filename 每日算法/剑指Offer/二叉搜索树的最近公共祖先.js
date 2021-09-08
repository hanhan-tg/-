// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 遍历所有节点
  // 假设q.val < q.val 如果 q.val < root.val < q.val 则返回true
  // 即找到值为他们之间的点
  let minVal = p.val < q.val ? p.val : q.val;
  let maxVal = p.val > q.val ? p.val : q.val;

  return dfs(root);

  function dfs(root) {
    if (root.val >= minVal && root.val <= maxVal) return root;
    let left = null;
    let right = null;
    if (root.val < minVal) left = dfs(root.right);
    if (root.val > maxVal) right = dfs(root.left);
    return left || right;
  }
};
var lowestCommonAncestor = function (root, p, q) {
  // 迭代
  let minVal = p.val < q.val ? p.val : q.val;
  let maxVal = p.val > q.val ? p.val : q.val;
  while (true) {
    if (root.val < minVal) {
      root = root.right;
    } else if (root.val > maxVal) {
      root = root.left;
    } else {
      break;
    }
  }
  return root;
};
