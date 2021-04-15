// https://leetcode-cn.com/problems/longest-common-prefix/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if(!strs.length) return '';
  // 硬算
  let ans = '';
  let index = 0;
  while (true) {
      str = strs[0][index]
      if(!str) return ans;
      for (let i = 0; i < strs.length; i++) {
          if(strs[i][index] !== str) {
              return ans;
          }
      }
      ans += str;
      index++;
  }
  return ans;
};