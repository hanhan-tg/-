// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 你的名字
    // 你变成我，走过我走过的路。
    // 我变成你，走过你走过的路。
    // 然后我们便相遇了..

    let p1 = headA;
    let p2 = headB;
    while(p1 !== p2){
        p1 = p1 ? p1.next : headB;
        p2 = p2 ? p2.next : headA;
    }
    return p1
};