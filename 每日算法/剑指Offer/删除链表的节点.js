// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  // 双指针 + 虚拟节点
  const dummy = {
    next: head,
  };
  let pre = dummy;
  let cur = head;
  while (cur) {
    if (cur.val == val) {
      pre.next = cur.next;
      return dummy.next;
    }
    pre = cur;
    cur = cur.next;
  }
  return null;
};
var deleteNode = function (head, val) {
  // 单指针
  if (head == null) return null;
  if (head.val == val) return head.next;
  let cur = head;
  while (cur.next != null && cur.next.val != val)
      cur = cur.next;
  if (cur.next != null)
      cur.next = cur.next.next;
  return head;
};
