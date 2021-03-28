// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy ={
        next: head,
    };
    let pre = dummy;
    let cur = head;
    while(cur && cur.next){
        if(cur.val == cur.next.val){
            // 说明有相同结点
            cur = cur.next;
        }else{
            if(pre.next != cur){
                // 说明之前有相同结点pre没动
                pre.next = cur.next;
                cur = cur.next;
            }else{
                pre = cur;
                cur = cur.next;
            }
        }
    }
    if(pre.next != cur){
        pre.next = cur.next;
    }
    return dummy.next;

};