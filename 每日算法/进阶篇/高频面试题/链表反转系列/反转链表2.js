// https://leetcode-cn.com/problems/reverse-linked-list-ii/

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
    // 记录下四个位置
    // m-1 
    // m 
    // n 
    // n+1
    // 然后让 m-1.next 指向 n  ，m.next 指向 n+1
    let root = new ListNode(0); // 定义一个节点指向head
    const vRoot = root;// 保留住这个虚拟节点
    root.next = head;
    let index = 0;
    let p1 = null;
    let p2 = null;
    let p3 = null;
    let p4 = null;
    // 记录四个点
    while(root){
        if(index == m-1){
            p1 = root;
        }
        if(index == m){
            p2 = root;
        }
        if(index == n){
            p3 = root;
        }
        if(index == n+1){
            p4 = root;
        }
        index++;
        root = root.next;
    }
    // 将m ~ n的链表反转
    let node = p2; // 初始位置
    let pre = p1;
    let next = null;
    while(node != p4){
        next = node.next;
        node.next = pre;
        pre = node;
        node = next;
    }
    // 最后连接
    p1.next = p3;
    p2.next = p4;

    return vRoot.next;
};