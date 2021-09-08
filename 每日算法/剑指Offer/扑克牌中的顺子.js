// https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  // 最大值 - 最小值 < 5 && 无重复
  const hash = {};
  let min = 13;
  let max = 0;
  for (let n of nums) {
      if(n == 0) continue;
      max = Math.max(max, n);
      min = Math.min(min, n);
      if(hash[n]) return false;
      hash[n] = true;
  }
  return max - min < 5;
};

var isStraight = function (nums) {
  // 排序， 最右边的 - 最左边的 < 5 (最左边的不包括joker)
  let joker = 0;
  nums.sort((a,b) => a-b);
  for(let i = 0; i < 4; i++) {
      if(nums[i] == 0) {
          joker++;
      }else if(nums[i+1] == nums[i]) {
          return false;
      }
  }
  return nums[4] - nums[joker] < 5
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function (nums) {
  nums.sort((a, b) => a - b);
  // 排序后硬比较，看看就得了
  let t = 0;
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] == 0) {
          t++;
      } else {
          if (nums[i + 1] - nums[i] == 1) {
              continue;
          } else if (nums[i + 1] == nums[i]) {
              return false;
          } else {
              if (nums[i + 1] - nums[i] > t + 1) {
                  return false;
              } else {
                  t = t - (nums[i + 1] - nums[i])
              }
          }
      }
  }
  return true
};