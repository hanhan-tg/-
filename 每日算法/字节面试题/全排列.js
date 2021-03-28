// https://leetcode-cn.com/problems/permutations/

// https://leetcode-cn.com/problems/permutations/solution/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/

var permute = function(nums) {
    // 回溯
    const res = [];
    const backTrace = (path) => {
        for(let i = 0; i < nums.length; i++){
            if(path.length == nums.length){
                res.push(path.slice()); // 这里必须取一份拷贝，不然全部都是对最初的数组进行处理，都相同
                return ;
            }
            if(nums[i] === '#') continue;
            path.push(nums[i]);
            let val = nums[i];
            nums[i] = '#';
            backTrace(path);
            path.pop();
            nums[i] = val;
        }
    }
    backTrace([], 0)
    return res;
};