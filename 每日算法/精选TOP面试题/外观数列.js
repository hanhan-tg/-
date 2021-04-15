// https://leetcode-cn.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if(n == 1) return '1';
  let ans = 1;

  for(let i = 2; i <= n; i++) {
      let str = ans.toString();
      ans = '';
      for(let i = 0; i < str.length; i++){
          len = 1;
          while(str[i] == str[i + 1]){
              len++;
              i++;
          }
          ans += len + str[i];
      }
  }
  return ans;
};