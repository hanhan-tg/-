https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // 正则表达式
  const reg = /\s+/g;
  s = s.replace(reg, ' ');
  return s.trim().split(' ').reverse().join(' ')
};
// 也可双指针
var reverseWords = function (s) {
  // 一次遍历
  let r = 0;
  s = s.trim();
  let str = "";
  let ans = [];
  while (r < s.length) {
      while(s[r] !== ' ' && r < s.length) {
          str += s[r];
          r++;
      }
      ans.unshift(str);
      str = '';
      while(s[r] == ' ' && r < s.length) r++;
  }
  if(str) {
      ans.shift(str);
  }
  return ans.join(' ');
};