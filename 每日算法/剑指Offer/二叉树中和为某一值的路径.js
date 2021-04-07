// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/

// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/solution/mian-shi-ti-34-er-cha-shu-zhong-he-wei-mou-yi-zh-5/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  // 一康就是回溯
  if (!root) return [];
  const ans = [];
  const path = [];
  const recur = (root, tar) => {
    if (!root) return;
    path.push(root.val);
    tar -= root.val;
    if (tar == 0 && !root.left && !root.right) {
      ans.push(path.slice());
    }
    recur(root.left, tar);
    recur(root.right, tar);
    path.pop();
  };
  recur(root, target);
  return ans;
};
