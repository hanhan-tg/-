// 思路
// 重点是9+1 = 10，要往前进1，从末尾开始判断，一位一位判断，如果当前位数字+1 != 10，那就直接返回+1后数组即可，不然就将该位置为0，然后再往前判断一位，且要+1，不断循环。
// 最后，如果循环正常结束了，说明数字的格式是000000.....(转换后)，所以只需要在其数组开头加上一个0即可

// 划重点：不能直接将数组转换为数字来处理，因为数字大小是有边界的
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    for(var i = len - 1; i >= 0; i--){
        digits[i]++;
        digits[i] %= 10;
        if(digits[i] % 10 != 0){
            return digits;
        }
    }
    // 如果循环都结束了，说明格式应当为00000....这种，只需要在前面+1就行了
    digits.unshift(1);
    return digits;
};

// 复杂度分析
// 时间复杂度：O(N) 最少1次循环，最多N次
// 空间复杂度：O(1)