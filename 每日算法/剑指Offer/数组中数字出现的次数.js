// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  // 分组进行异或，重点是把两个不同的数分开

  // 先异或所有，然后把结果找到二进制中的1
    // 对应这个1，由于所求两个数异或的结果就含有这个1，所以他们和这个1进行&就一定得到不同，就可以根据这个分组
    // 最后在遍历分的两组，最后剩下的值就是两个结果
  let ret = 0;
  for(let i = 0; i < nums.length; i++){
      ret ^= nums[i];
  }
  if(!ret) return [];
  let pos = 1;
  while((ret & pos) == 0){
      pos <<= 1;
  }
  // 此时的pos是二进制中某一位为1的数
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
      if ((nums[i] & pos) !== 0) { // 分界条件，相同的数一定在同一边
          a ^= nums[i];
      } else {
          b ^= nums[i];
      }
  }
  return [a, b]
};