// https://leetcode-cn.com/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 思路：运用回溯的思想
var combinationSum = function(candidates, target) {
    const res = [];
    const resHash = {};
    for(let i = 0; i < candidates.length; i++){
        combine([], candidates[i]);
    }
    return res;

    function combine(arr, num){
        // console.log(arr, num)
        arr.push(num);
        const sumArr = sum(...arr)
        if( sumArr < target){
            for(let i = 0; i < candidates.length; i++){
                combine(arr, candidates[i]);
                arr.pop();
            }
        }else if( sumArr == target){
            console.log('=======', arr)
            const newArr = [...arr]; // 必须用新的数组保存arr中内容，不然sort后的arr会被改变，回溯后会出错
            newArr.sort((a,b) => a-b);
            if(resHash[newArr.toString()]){ // 通过用一个hash表来判断是否出现过该组合
                return ;
            }
            resHash[newArr.toString()] = true;
            res.push([...newArr]);
        }else{
            return ;
        }
    }

    function sum(...args){
        let ans = 0;
        for(let i = 0; i < args.length; i++){
            ans += args[i];
        }
        return ans;
    }


    // 更快的方法
    // 通过设置start，天生就不会重复，不需要处理重复的情况。因为candidates中的是有序的，且不重复
    const res = [];
    const dfs = (start, temp, sum) => { // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
        if (sum >= target) {
            if (sum == target) {
                res.push(temp.slice()); // temp的拷贝 加入解集
            }
            return;   // 结束当前递归
        }
        for (let i = start; i < candidates.length; i++) { // 枚举当前可选的数，从start开始
            temp.push(candidates[i]);         // 选这个数
            dfs(i, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
            temp.pop();   // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
        }
    };
    dfs(0, [], 0); // 最开始可选的数是从第0项开始的，传入一个空集合，sum也为0
    return res;

    // 时间复杂度：O(n * 2^n)
    // 空间复杂度：O(target)

};