// https://leetcode-cn.com/problems/subsets/

/**
    例如我们现在有 3 个元素，那我们分别给这 3 个元素编号为 A B C
    实际上这三个元素能取出的所有子集就是这 3 个元素的使用与不使用这两种状态的笛卡尔积。共2^nums.length个子集(包括空 和 自身 )
    我们使用 0 与 1 分别表示这 3 个元素的使用与不使用的状态。
    那么这 3 个元素能构成的的所有情况其实就是：000, 001, 010 ... 111
    依次遍历这些数，将为 1 的元素取出，即为子集
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [],
        sum = 1 << nums.length, // 用位运算比乘方来的快
        temp;
    for (let now = 0; now < sum ; now++){
        temp = [];
        for (let i = 0; now >> i > 0; i++){ // 最多循环三次 111，就变为0了
            if( ((now >> i) & 1) == 1){ // 说明now的二进制某位上有值，即nums某项应该在子集中
                temp.push(nums[i]);
            }
        }
        res.push(temp); // 每一个now 对应着一个子集
    }
    // O(n)
    // O(2^n) n为nums.length
};