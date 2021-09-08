// https://leetcode-cn.com/problems/3sum/submissions/



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    // 定死一个数，双指针
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        if (nums[i] > 0) break;
        let target = -nums[i];
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[l] + nums[r] === target) {
                res.push([nums[i], nums[l], nums[r]])
                while (l<r && nums[l] == nums[l+1]) l++; // 去重
                while (l<r && nums[r] == nums[r-1]) r--; // 去重
                l++;
                r--;
            } else if (nums[l] + nums[r] > target) {
                r--;
            } else {
                l++;
            }
        }
    }
    return res;
};