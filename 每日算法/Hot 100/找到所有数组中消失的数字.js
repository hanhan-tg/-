// https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/

//  https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/solution/shou-hua-tu-jie-jiao-huan-shu-zi-zai-ci-kzicg/


var findDisappearedNumbers = function(nums) {

    // 原地hash
    const res = [];
    let i = 0;
    while(i < nums.length){
        if(nums[i] === i + 1 ){
            i++;
            continue;
        }
        let idealIndex = nums[i] - 1;
        if( nums[i] === nums[idealIndex]) {
            i++;
            continue;
        }
        [ nums[i], nums[ idealIndex] ] = [nums[idealIndex], nums[i]];
    }
    for(let i = 0; i < nums.length; i++){
        if(i + 1 !== nums[i]){
            res.push(i + 1);
        }
    }
    return res;
};

var findDisappearedNumbers = function(nums) {
    // 官方题解
    // 假设nums[i] == val
    // 由于val存在，所在nums中对应val-1下标一定有能对应到数
    // 那我把num[val - 1] += n;
    // 但是一个数有可能出现了不止一次，也就是不止多加了一个n
    // 所以每次得取余在加 n
    // 最后数组中如果有小于n的值，那么那个位置就没有对应的数，也就是下标和值对应不上
    const n = nums.length;
    for (const num of nums) {
        const x = (num - 1) % n;
        nums[x] += n;
    }
    console.log(nums)
    const ret = [];
    for (const [i, num] of nums.entries()) {
        if (num <= n) {
            ret.push(i + 1);
        }
    }
    return ret;
};