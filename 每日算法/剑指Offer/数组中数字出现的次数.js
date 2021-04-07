// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  // 分组进行异或，重点是把两个不同的数分开
  let ret = 0;
  for(let i = 0; i < nums.length; i++){
      ret ^= nums[i];
  }
  if(!ret) return [];
  let pos = 1;
  while((ret & pos) == 0){
      pos <<= 1;
  }
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
      if ((nums[i] & pos) !== 0) {
          a ^= nums[i];
      } else {
          b ^= nums[i];
      }
  }
  return [a, b]
};