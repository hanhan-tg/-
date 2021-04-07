// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    // 双指针
    if(!head || k <= 0) return null;
    let pre = head;
    let next = head;
    while(k - 1){
        next = next.next;
        k--;
    }
    while(next.next){
        pre = pre.next;
        next = next.next;
    }
    return pre;
};
var getKthFromEnd = function(head, k) {
    if(!head || k <= 0) return null;
    // 线性表
    let arr = [];
    let node = head;
    while(node){
        arr.push(node);
        node = node.next;
    }
    return arr[arr.length - k];
};