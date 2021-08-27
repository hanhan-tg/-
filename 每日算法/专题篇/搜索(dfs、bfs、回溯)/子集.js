// https://leetcode-cn.com/problems/subsets/



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function (nums) {


    const res = [];
    const dfs = (start, temp) => {
        if(temp.length > nums.length) {
            return;
        }
        res.push(temp.slice());

        for(let i = start; i < nums.length; i++) {
            temp.push(nums[i])
            dfs(i + 1, temp);
            temp.pop();
        }
    }
    dfs(0, []);
    return res;
};