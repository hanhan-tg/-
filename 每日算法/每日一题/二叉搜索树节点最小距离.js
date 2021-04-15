// https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  // 中序排序，遍历
  const arr = [];
  let dis = Infinity;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    arr.push(root.val);
    dfs(root.right);
  };
  dfs(root);
  for (let i = 0; i < arr.length - 1; i++) {
    dis = Math.min(Math.abs(arr[i] - arr[i + 1]), dis);
  }
  return dis;
};
var minDiffInBST = function (root) {
  // 因为是二叉搜索树，所以pre对应的节点就是该节点在中序遍历的前一个节点，
  let ans = Infinity,
    pre = -1;
  const dfs = (root) => {
    if (root === null) {
      return;
    }
    dfs(root.left);
    if (pre == -1) {
      pre = root.val;
    } else {
      ans = Math.min(ans, root.val - pre);
      pre = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return ans;
};
