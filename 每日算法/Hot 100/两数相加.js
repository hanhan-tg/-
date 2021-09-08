// https://leetcode-cn.com/problems/add-two-numbers/

// 改题目：换成  2->4->3 表示243,然后两数相加后也返回如8->0->7。难度比原题更高
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 用递归比较合适
    const f = (node1, node2) => {
        // 任意取一个作为最终的链条
        if(!node1 && !node2) return null;
        if(!node1) return node2;
        if(!node2) return node1;
        const res = f(node1.next, node2.next);
        const newVal = node1.val + node2.val + (res ? res[0] : 0);
        const newNode = new ListNode(newVal % 10)
        newNode.next = res ? res[1] : null;
        if(newVal >= 10) {
            return [1, newNode]
        }
        return [0, newNode];
    }
    const res = f(l1, l2);
    if(res[0] === 1) {
        return new ListNode(1, res[1])
    } else {
        return res[1]
    }
};