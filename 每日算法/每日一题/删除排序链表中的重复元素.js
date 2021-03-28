// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
// 2021-3-26

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let cur = head;
    while(cur && cur.next){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return head;
};