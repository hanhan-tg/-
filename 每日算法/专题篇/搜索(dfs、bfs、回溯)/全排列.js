// https://leetcode-cn.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function (nums) {

    const res = [];
    const dfs = (temp) => {
        if(temp.length === nums.length) {
            res.push(temp.slice())
        }
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] === '#') continue;
            const str = nums[i];
            nums[i] = '#';
            temp.push(str);
            dfs(temp);
            nums[i] = str;
            temp.pop();
        }
    }
    dfs([])
    return res;
};