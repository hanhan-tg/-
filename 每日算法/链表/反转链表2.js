// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    const dummyHead = { // 虚拟节点用来保存开头，以处理极端情况
        next: head
    };
    let index = 0;
    let cur = dummyHead.next; 
    let pre = cur; // 因为是反转，所以肯定要pre节点
    let p1 = (p2 = p3 = p4 = null); // 四点法
    while(cur){// 走一整遍链表
        const next = cur.next;
        index++;

        if(index > m && index <= n){
            cur.next = pre;
        }
        if(index == m - 1){ // 如果m==1，那么就没有p1节点了
            p1 = cur;
        }
        if(index == m){
            p2 = cur;
        }
        if(index == n){
            p3 = cur;
        }
        if(index == n + 1){
            p4 = cur;
        }
        pre = cur;
        cur = next;
    }
    (p1 || dummyHead).next = p3;// 如果m==1，就找不到头了
    p2.next = p4;
    return dummyHead.next;
    // 复杂度分析
    // 时间复杂度： O(N)
    // 空间复杂度:  O(1)

    // 详解https://github.com/azl397985856/leetcode/blob/master/problems/92.reverse-linked-list-ii.md
};