// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/


function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 递归
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let pre = null;
    let next = null;
    while(head) {
        next = head.next
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};