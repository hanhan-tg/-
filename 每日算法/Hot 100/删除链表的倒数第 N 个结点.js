// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 双指针
    const dummy = {
        next: head,
    }
    let left = dummy;
    let right = dummy;
    while(n){
        right = right.next;
        n--;
    }
    if(!right.next){
        // 说明要删除的是头结点
        dummy.next = dummy.next.next;
        return dummy.next;
    }
    // 此时右指针比左指针快了n步
    while(right.next){
        left = left.next;
        right = right.next;
    }
    // 此时left.next指向的节点就要删除的节点
    left.next = left.next.next;
    return head;
};