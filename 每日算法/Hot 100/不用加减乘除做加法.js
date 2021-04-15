// https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/

// 快去康题解，题解几行搞定

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  // 位运算
  let index = 1;
  let add = 0; // 进位
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let num1 = a & index;
    let num2 = b & index;
    if ((!num1 && num2) || (num1 && !num2)) {
      if (!add) {
        ans |= index;
      }
    } else if (!num1 && !num2) {
      if (add) {
        ans |= index;
        add = 0;
      }
    } else {
      // num1 && num2
      if (add) {
        ans |= index;
      }
      add = 1;
    }
    index <<= 1;
  }
  return ans;
};
