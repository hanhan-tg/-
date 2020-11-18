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
const result = twoSum([2, 7, 11, 15], 9);
console.log(result);