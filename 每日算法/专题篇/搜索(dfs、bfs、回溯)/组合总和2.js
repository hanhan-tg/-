// https://leetcode-cn.com/problems/combination-sum-ii/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    const resHash = {};
    const res = [];
    const dfs = (start, temp, sum) => { // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
        if (sum >= target) {
            if (sum == target) {
                if(resHash[temp]){
                    return;
                }
                resHash[temp] = true;
                res.push(temp.slice()); // temp的拷贝 加入解集
            }
            return;   // 结束当前递归
        }
        for (let i = start; i < candidates.length; i++) { // 枚举当前可选的数，从start开始
            // if(candidates[i] == candidates[i - 1]) continue;
            temp.push(candidates[i]);         // 选这个数
            dfs(i + 1, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
            temp.pop();   // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
        }
    };
    dfs(0, [], 0); // 最开始可选的数是从第0项开始的，传入一个空集合，sum也为0
    return res;
};


    /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    const res = [];
    dfs(0, [], 0)
    return res;
    
    function dfs(start, temp, sum){
        if(sum >= target){
            if(sum == target){
                res.push([...temp]);
            }
            return ;
        }
        for(let i = start; i < candidates.length; i++){
            // i-1 >= start  该次循环刚开始第一轮的时候，要正常走(因为是该层的初始)，
            // 第二轮的时候开始要判断是否重复出现
            // 举例子： [1,1,1,1] 2
            // 当第一遍循环的时候，会取num[0]，然后执行dfs把取该值下的所有情况遍历，然后出来，发现下一次循环取num[1]，而两者相同
            // 在num[1]可达的所有情况在num[0]是一定可以达到的，所以要往后走
            if(i - 1 >= start && candidates[i - 1] == candidates[i]) continue; // 去重
            temp.push(candidates[i]);
            dfs(i + 1, temp, sum + candidates[i]);
            temp.pop();
        }
    }
};