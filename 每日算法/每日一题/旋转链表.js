// https://leetcode-cn.com/problems/rotate-list/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!k) return head;
    if(!head || !head.next) return head;
    
    // 双指针
    let left = head;
    let right = head;
    let pre = head;
    while(k - 1) {
        if(right.next){
            right = right.next;
        }else{
            right = head;
        }
        k--;
    }
    while(right.next){
        pre = left;
        left = left.next;
        right = right.next;
    }
    if(left === head) return left;// 说明此时旋转之后和原来相同
    // 此时left作为新的head
    pre.next = null;
    right.next = head;
    return left;
};