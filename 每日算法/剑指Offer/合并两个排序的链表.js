// https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 非递归
    // 设置一个虚拟头结点方便找到整个链表
    const dummy = new ListNode(0);
    let head = dummy;
    while(l1 && l2){
        if(l1.val <= l2.val){
            head.next = l1;
            l1 = l1.next;
        }else{
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    if(l1){
        head.next = l1;
    }else{
        head.next = l2;
    }
    return dummy.next
    // O(N)
    // O(N)
};

var mergeTwoLists = function (l1, l2) {
    // 递归
    if(!l1 || !l2){
        return l1 || l2;
    }
    if(l1.val <= l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next)
        return l2;
    }
    // O(N)
    // O(1)
};