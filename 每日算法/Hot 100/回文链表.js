// https://leetcode-cn.com/problems/palindrome-linked-list/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
// 思路2：第一次遍历找到结点总个数，同时判断是否相等，下次就next，n - 2，不断循环
// 写一个方法，传入口结点和递归次数，时间复杂度似乎为O(n^2)
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    // 方法一：线性表
    const arr = [];
    while(head){
        arr.push(head);
        head = head.next;
    }
    for(let i = 0; i < arr.length / 2; i++){
        if(arr[i].val != arr[arr.length - 1 - i].val) return false;
    }
    return true;
};