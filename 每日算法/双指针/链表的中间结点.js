// https://leetcode-cn.com/problems/middle-of-the-linked-list/

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
 * @return {ListNode}
 */
var middleNode = function(head) {
    // 硬求，不彳亍
    if(!head) return null;
    const arr = [];
    while(head){
        arr.push(head);
        head = head.next;
    }
    console.log(arr);
    const mid = arr.length % 2 == 0 ? arr.length/2 : Math.floor(arr.length / 2);
    return arr[mid];

    // 时间复杂度： O(n)    n为节点个数
    // 空间复杂度： O(n)    创建了一个长度为节点个数的数组

    // 快慢指针
    // 慢指针步长为1，快指针步长为2，当快指针到链表末端的时候慢指针就处于中间
    if(!head) return null;
    let l = head;
    let r = head;
    while(r && r.next){// r==null 说明节点为奇数个，r.next==null说明节点为偶数个
        l = l.next;
        r = r.next.next;
    }
    return l;
    // 时间复杂度： O(n)  节点个数的一半
    // 空间复杂度： O(1)
};