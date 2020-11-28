// https://leetcode-cn.com/problems/linked-list-cycle-ii/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // 哈希表
    // 每个点都存，没出循环说明有换，第一个在map中被找到的就是进入环的节点
    // if(!head || !head.next) return null;
    // let map = new Map();
    // while (head) {
    //     if (map.has(head)) return map.get(head);
    //     map.set(head, head);
    //     head = head.next;
    // }
    // return null;
    // 时间复杂度：O(n) 每个节点遍历一次
    // 空间复杂度：O(n) 

    // 快慢指针
    // 思路1：先判断是否有环，有环的话保留快指针在交点，慢指针从链表头开始
    //        慢指针每走一步，快指针就走一圈，如果快慢指针相等，说明慢指针
    //        位置就是环的入口点
    // 时间复杂度：O(n*p), n 是环外链表的长度，p 是环的长度。
    // 空间复杂度：O(1)。

    // https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/
    // 思路2：重点在于，找到判断环存在时的快慢指针交点，此时改点到环起点的距离和链表头到环起点的距离相同，
    //        让一个指针回到链表头，然后同时一步一步移动，交点就为环的起点

    if(!head || !head.next) return null;
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            // console.log(1111) 说明进来了
            slow = head;
            while(slow != fast){
                slow = slow.next;
                fast = fast.next;
            }
            // console.log(1) 没出来
            return slow;
        }
    }
    return null;

    // 时间复杂度： O(n)
    // 空间复杂度:  O(1)
};