function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
* @param {TreeNode} root
* @return {number[][]}
*/
var levelOrder = function (root) {
  if (!root) return [];
  // 层序遍历
  const queue = [root];
  const ans = [];
  while (queue.length) {
      let len = queue.length;
      let i = 0;
      ans.push([]);
      while (i < len) {
          const node = queue.shift();
          ans[ans.length - 1].push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
          i++;
      }
  }
  return ans;
};