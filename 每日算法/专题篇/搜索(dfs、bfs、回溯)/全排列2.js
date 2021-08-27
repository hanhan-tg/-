// https://leetcode-cn.com/problems/permutations-ii/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b)

    const res = [];
    const dfs = (temp) => {
        if (temp.length === nums.length) {
            res.push(temp.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === '#') continue
            // 看题解去吧
            if (i > 0 && nums[i] === nums[i - 1] && nums[i - 1] !== '#') {
                continue;
            }
            const str = nums[i]
            nums[i] = '#';
            temp.push(str);
            dfs(temp);
            nums[i] = str;
            temp.pop();
        }
    }
    dfs([]);
    return res;
};