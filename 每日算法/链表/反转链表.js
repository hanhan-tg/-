/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseList = function(head) {
    // 方法一，直接循环处理
    // if(!head || !head.next)return head;
    // let cur = head;
    // let pre = null;
    // while(cur){
    //     const next = cur.next;
    //     cur.next = pre;
    //     pre = cur;
    //     cur = next;
    // }
    // return pre;
    /**
     *  复杂度分析
        时间复杂度：$O(N)$
        空间复杂度：$O(1)$
     */

    //  方法二：递归
    if(!head || !head.next)return head;
    var listChild = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return listChild;  // 返回的是子链表的头结点
    /**
     *  复杂度分析
        时间复杂度：$O(N)$
        空间复杂度：$O(N)$
     */
};