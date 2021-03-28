// https://leetcode-cn.com/problems/sort-list/


// https://leetcode-cn.com/problems/sort-list/solution/shou-hua-tu-jie-gui-bing-pai-xu-148-lian-biao-pai-/
var sortList = function (head) {
    if(!head || !head.next) return head;
    // 归并排序
    // 快慢指针 找中点，然后拆分，合并
    let slow = head;
    let fast = head;
    let preSlow = head;

    while (fast && fast.next) {
        preSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    preSlow.next = null;
    // 此时已经断开了
    const l1 = sortList(head);
    const l2 = sortList(slow);

    return merge(l1, l2);

};
function merge(l1, l2) {
    let dummy = new ListNode(0);
    let node = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }
    if (l1) {
        node.next = l1;
    }
    if (l2) {
        node.next = l2;
    }
    return dummy.next;
}