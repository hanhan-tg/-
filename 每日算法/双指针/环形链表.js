// https://leetcode-cn.com/problems/linked-list-cycle/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 快慢指针
    // 只要快指针或其next不为null，直到两指针相等即可，为null说明无环
    if(!head || !head.next) return false;
    let l = head;
    let r = head;
    do{
        l = l.next;
        r = r.next.next;
        if(!r || !r.next){
            return false;
        }
    }while(l != r);
    return true;
    // 时间复杂度：O(n)
    // 空间复杂度：O(1)

    // 哈希表
    if(!head || !head.next) return false;
    let map = new Map();
    while (head) {
        if (map.has(head)) return true;
        map.set(head, true);
        head = head.next;
    }
    return false
    // 时间复杂度：O(n)
    // 空间复杂度：O(n)

    //节点标记法(同上)
    if(!head || !head.next) return false;
    while(head) {
        if(head.tag) return true;
        head.tag = true;
        head = head.next;
    }
    return false;

    // 一个神奇的方法，不过就是性能不咋地
    try {
        JSON.stringify(head); // stringify内对象不能内循环
        return false;
    } catch {
        return true;
    }
};