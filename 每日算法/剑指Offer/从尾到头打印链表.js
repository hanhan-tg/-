// https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    if(!head) return [];
    
    // 递归
    // function f(head) {
    //     if (head){
    //         return f(head.next) + "," + head.val;
    //     }
    // }
    // const str = f(head);
    // return str.split(",").splice(1);

    // 迭代
    const res = [];
    while(head){
        res.unshift(head.val);
        head = head.next;
    }
    return res;

    // 时间复杂度：O(N)
    // 空间复杂度：O(N)
};