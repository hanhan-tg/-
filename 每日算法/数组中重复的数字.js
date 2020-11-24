/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    // 方法0
    // 暴力法，直接双重循环

    // 方法1
    var map = new Map();
    var arr = [];
    for(var i = 0; i < nums.length; i++){
        var value = nums[i];
        if(map.has(value)){
            arr.push(value);
        }
        else {
            map.set(value, value);
        }
    }
    var random = Math.floor(Math.random()*(arr.length - 1));
    return arr[random];

    // 方法1简易版 使用哈希表
    // 哈希表的结构是：number-boolean，number 就是数组中的数字，boolean 代表数字是否出现过。
    // 整体的流程是：遍历数组中的数字，检查是否出现过，如果出现过，那么返回此数字。
    var map = {};
    var arr = [];
    for (const i of nums) {
        if(!map[i]){
            map[i] = true;
        }else{
            arr.push(i);
        }
    }
    var random = Math.floor(Math.random()*(arr.length - 1));
    return arr[random];

    // 方法2 不行，时间太长
    var arr = [];
    while(nums.length){
        var value = nums[0];
        nums.shift();
        if(nums.includes(value)){
            arr.push(value);
        }
    }
    var random = Math.floor(Math.random()*(arr.length - 1));
    return arr[random];

    // 方法 3 使用Set集合来处理
    var arr = [];
    var s = new Set();
    for (const i in nums) {
        var curlen = s.size;
        s.add(nums[i]);
        if(s.size == curlen){
             如果每次在集合中添加了该元素后对应的长度和添加之前相同，说明添加的是重复的数据
            arr.push(nums[i]);
        }
    }
    var random = Math.floor(Math.random()*(arr.length - 1));
    return arr[random];

    // 方法4 原地哈希
    var map = {};
    var arr = new Set();
    for (var i = 0; i < nums.length; i++) {
        while (i != nums[i] && nums[nums[i]] != nums[i]) { 
            // 不断的循环，使得i位置上对应nums[i]的值为i
            // 将对应的数字，放入对应的坑位；并且坑位上也不是正确的数字
            console.log(nums[nums[i]], nums[i]);
            [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
        }
        if (i !== nums[i] && nums[nums[i]] == nums[i]) {
            // 如果当前i对应的nums[i]的值和 该值对应在nums中的位置上的值的时候
            arr.add(nums[i]); 
        }
        // console.log('i == ', i);
        // console.log('nums = ', nums);
        // console.log('arr = ', arr);
        // console.log("-----------");
    }
    var random = Math.floor(Math.random()*(arr.length - 1));
    return arr[random];
};
console.time();
var result = findRepeatNumber([2, 3, 1, 0, 2, 5, 3, 0, 1]);
console.log(`result = ${result}`);
console.timeEnd();