// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
* @param {TreeNode} root
* @return {number[][]}
*/
var zigzagLevelOrder = function (root) {
  // 官方题解和我的差别不大
  // 正常层序遍历
  // 标志位，ans.push(arr.slice().reverse())
  if(!root) return [];

  const ans = [];
  let arr = [root];
  let val = [root.val];
  let flag = true;
  while (arr.length) {
      if(flag) {
          ans.push(val);
      } else {
          ans.push(val.reverse());
      }
      val = [];
      flag = !flag;
      let len = arr.length;
      for(let i = 0; i < len; i++){
          const node = arr.shift();
          if(node.left) {
              arr.push(node.left);
              val.push(node.left.val);
          }
          if(node.right) {
              arr.push(node.right);
              val.push(node.right.val);
          }
      }
  }
  return ans
};