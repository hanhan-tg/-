// https://leetcode-cn.com/problems/subsets-ii/submissions/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b)

    const res = [];

    const dfs = (start, temp) => {
        if (temp.length > nums.length) return;

        res.push(temp.slice());

        for (let i = start; i < nums.length; i++) {
            
            // 这的思路和全排列2一样，但是由于是排序了的，所以可以不用管当前是否是'#'，因为肯定不是
            if ( (i > 0 && nums[i] === nums[i - 1] && nums[i - 1] !== '#')) {
                continue
            }
            const str = nums[i];
            nums[i] = '#';
            temp.push(str)
            dfs(i + 1, temp);
            nums[i] = str;
            temp.pop();
        }
    }
    dfs(0, []);
    return res;

};