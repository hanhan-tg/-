/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 哈希表
// 将每个数所需的数都存在哈希表中作为key，value就为该数的索引，即下次遇到该key的时候就通过nums[key]可以得到之前那个数的index，
// 两个index一组合就为结果
var twoSum = function(nums, target) {
    if(!Array.isArray(nums)){
        return ;
    }
    if(typeof target != 'number'){
        return ;
    }
    //  构造hash表，存储方式{need: index}
    var map = new Map();
    for(var i = 0 ; i < nums.length; i++){
        // 找到需要的值
        var need = target - nums[i];
        // 如果nums某个索引的值在map中有对应值，说明可以组成target
        if(map.has(nums[i])){
            return [map.get(nums[i]), i];
        }
        // 将需要的值存储进去
        map.set(need, i);
    }
};
// 时间复杂度：O(n)
// 空间复杂度：O(n)