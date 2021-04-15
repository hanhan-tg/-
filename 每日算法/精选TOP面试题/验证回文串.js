// https://leetcode-cn.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLocaleLowerCase().match(/[A-Za-z0-9]+/g)
  if(!s) return true;
  s = s.join('');
  let left = 0;
  let right = s.length - 1;
  while(left < right) {
      if(s[left] != [s[right]]) return false;
      left++;
      right--;
  }
  return true;
};