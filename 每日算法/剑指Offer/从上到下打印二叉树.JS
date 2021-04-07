// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
* @param {TreeNode} root
* @return {number[]}
*/
var levelOrder = function (root) {
  if(!root) return [];
  // 层序遍历
  const queue = [root];
  const ans = [];
  while (queue.length) {
      // 注释部分适用于一层一层的打印出来，当然，对ans的操作也得稍微改一点
      // let len = queue.length;
      // let i = 0;
      // while(i < len) {
          const node = queue.shift();
          ans.push(node.val);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      //     i++;
      // }
  }
  return ans;
};