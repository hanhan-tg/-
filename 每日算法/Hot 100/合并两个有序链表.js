// https://leetcode-cn.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let head;
    if (l1.val < l2.val) {
        head = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        head = new ListNode(l2.val);
        l2 = l2.next;
    }
    let node = head;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            node.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            node.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        node = node.next;
    }
    while (l1) {
        node.next = new ListNode(l1.val);
        node = node.next;
        l1 = l1.next;
    }
    while (l2) {
        node.next = new ListNode(l2.val);
        node = node.next
        l2 = l2.next;
    }
    return head;
};