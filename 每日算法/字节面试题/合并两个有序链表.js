// https://leetcode-cn.com/problems/merge-two-sorted-lists/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 递归
    if(!l1 && !l2) return null;
    if(!l1) return l2;
    if(!l2) return l1;
    // 递归
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
    // O(m + n)
    // O(m + n)
};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 迭代
    const dummy = new ListNode(-1);
    let head = dummy;
    while(l1 && l2){
        if(l1.val < l2.val){
            head.next = l1;
            l1 = l1.next;
        }else{
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next
    }
    head.next = l1 ? l1 : l2;
    return dummy.next
    // O(N)
    // O(1)
};