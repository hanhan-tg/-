// https://leetcode-cn.com/problems/odd-even-linked-list/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
* @param {ListNode} head
* @return {ListNode}
*/
var oddEvenList = function(head) {
  // 如果不原地的话可以借助数组来存储每个点，线性表，在排序改变指向即可

  // 双指针
  // 一个从奇数节点开始，一个从偶数节点开始，同步走，同步改变next，最后再把奇数节点指向偶数初始节点即可
  if(!head) return null;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while(odd.next && even.next){
      odd.next = even.next;
      even.next = even.next.next;

      odd = odd.next;
      even = even.next;
  }
  odd.next = evenHead;
  return head;
};