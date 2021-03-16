// https://leetcode-cn.com/problems/reverse-linked-list/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return null
    // 迭代
    let next = null;
    let pre = null;
    while(head){
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};
var reverseList = function(head) {
    // 先找到最后结点，然后对之前的节点翻转，最后返回最后的节点
    if(!head || !head.next) return head;
    const lastNode = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return lastNode;
};