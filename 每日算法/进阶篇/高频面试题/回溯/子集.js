// https://leetcode-cn.com/problems/subsets/

//  方法一
var subsets = function(nums) {
    const res = [];

    const dfs = (index, list) => {
        if (index == nums.length) { // 指针越界
        res.push(list.slice());   // 加入解集
        return;                   // 结束当前的递归
        }
        list.push(nums[index]); // 选择这个数
        dfs(index + 1, list);   // 基于该选择，继续往下递归
        list.pop();             // 上面的递归结束，撤销该选择
        dfs(index + 1, list);   // 不选这个数，继续往下递归
    };

    dfs(0, []);
    return res;
};

// 方法二
var subsets = function(nums) {
    const res = [];

    const dfs = (index, list) => {
        res.push(list.slice());     // 进入子递归前加入解集
        for (let i = index; i < nums.length; i++) { // 枚举出所有可选的数
        list.push(nums[i]);       // 选这个数
        dfs(i + 1, list);         // 基于选这个数，继续递归，传入的是i+1不是index+1
        list.pop();               // 撤销选这个数
        }
    };

    dfs(0, []);
    return res;
};

// https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/