// https://leetcode-cn.com/problems/reorder-list/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reorderList = function(head) {
    if(!head || !head.next) return head;
    // 链表分半 + 右半段逆转 + 合并
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let rightHead = slow.next;
    slow.next = null;
    // 此时左链表头为head，右链表头尾rightHead

    // 逆转右链表
    console.log(head, rightHead)
    rightHead = reverse(rightHead);
    conbine(head, rightHead);

    function conbine(head, rightHead){
        while(head && rightHead){
            let headNext = head.next;
            let rightNext = rightHead.next;
            head.next = rightHead;
            rightHead.next = headNext;
            
            head = headNext;
            rightHead = rightNext;
        }
        if(rightHead){
            head.next = rightHead;
        }
    }
    function reverse(node){
        if(!node )return;
        let next = null;
        let pre = null;
        let cur = node;
        while(cur){
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }
};
var reorderList = function(head) {
    if(!head || !head.next) return head;
    // 线性表实现
    // 用一个数组把每个节点都存储进来，对应在数组中的位置也为在链表中的位置
    const arr = [];
    while(head){
        arr.push(head);
        head = head.next;
    }
    // 此时每个节点已经存储进来了
    let i = 0; j = arr.length - 1;
    while(i < j){
        arr[i].next = arr[j];
        i++;
        if(i == j) break;
        arr[j].next = arr[i];
        j--;
    }
    // 最后只需要把连着的链表断开即可
    // 此时i为最后一个节点
    arr[i].next = null;
    // O(n)
    // O(n)
    
};
var reorderList = function(head) {
    // 链表递归实现
    if(!head || !head.next || !head.next.next) return head;

    let temp = head;
    while(temp.next.next){
        temp = temp.next;
    }
    temp.next.next = head.next;
    head.next = temp.next;
    temp.next = null;
    reorderList(head.next.next)
};