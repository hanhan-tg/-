// https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    // 滑动窗口
    if(target == 1) return [];

    let left = 1;
    let right = 1;
    let sum = 1;
    const res = [];
    while (right <= Math.ceil(target / 2)) {
        if(sum > target){
            sum -= left;
            left++;
            continue;
        }
        if(sum == target){
            let arr = [];
            for (let i = left; i <= right; i++) {
                arr.push(i);
            }
            res.push(arr);
        }
        right++;
        sum += right;
    }
    return res;
};