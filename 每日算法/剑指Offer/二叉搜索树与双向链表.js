// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/

// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/solution/mian-shi-ti-36-er-cha-sou-suo-shu-yu-shuang-xian-5/

function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
  // 利用中序遍历的特性
  let head = null;
  let pre = null;
  const dfs = (cur) => {
    if (!cur) return;
    dfs(cur.left);

    if (pre) {
      pre.right = cur;
    } else {
      head = cur;
    }
    cur.left = pre;
    pre = cur;

    dfs(cur.right);
  };
  dfs(root);
  head.left = pre;
  pre.right = head;
  return head;
};
