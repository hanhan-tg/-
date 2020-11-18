// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）
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
var reversePrint = function(head) {
    // 方法1  直接将每个节点的值用数组依次存储下来，最后将数组reverse一下即可
    // 辅助栈
    // var arr = [];
    // while(head){
    //     arr.push(head.val);
    //     head = head.next;
    // }
    // return arr.reverse();
    
    // 方法2  递归法  得到的是一个reverse后字符串，无法返回为数组？
    if(!head){
        return [];
    }
    return reversePrint(head.next) + head.val;
};

head = [1,3,2];
const result = reversePrint(head);
console.log(result);