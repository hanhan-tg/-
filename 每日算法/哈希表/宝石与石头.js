// https://leetcode-cn.com/problems/jewels-and-stones/
var numJewelsInStones = function(jewels, stones) {
    // hash
    const hash = {};
    let count = 0;
    for(let i = 0; i < jewels.length; i++){
        hash[jewels[i]] = true;
    }
    for(let i = 0; i <= stones.length; i++){
        if(hash[stones[i]])  count++;
    }
    return count;
};