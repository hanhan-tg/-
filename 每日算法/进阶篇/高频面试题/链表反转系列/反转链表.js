// https://leetcode-cn.com/problems/reverse-linked-list/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 迭代
    if(!head){
        return null;
    }
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
var reverseList = function(head, pre = null) {

    // 递归
    // 每次递归的目的就是把当前指针的next指向上一个节点，然后往后递归即可
    if(!head){
        return pre;
    }
    next = head.next;// 保留下一个节点
    head.next = pre;
    return reverseList(next, head)
};