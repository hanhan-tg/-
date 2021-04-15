// https://leetcode-cn.com/problems/reverse-integer/

var reverse = function (x) {
  // 感觉不具有复用性
  const arr = x.toString().split("");
  arr.reverse();
  if (arr[arr.length - 1] == "-") {
    arr.pop();
    arr.unshift("-");
  }
  let ans = +arr.join("");
  if (ans <= Math.pow(2, 31) - 1 && ans > -Math.pow(2, 31)) return ans;
  return 0;
};
var reverse = function (x) {
  var res = 0;
  while (x != 0) {
    //每次取末尾数字
    var tmp = x % 10;
    //判断是否 大于 最大32位整数
    if (res > 214748364 || (res == 214748364 && tmp > 7)) {
      return 0;
    }
    //判断是否 小于 最小32位整数
    if (res < -214748364 || (res == -214748364 && tmp < -8)) {
      return 0;
    }
    res = res * 10 + tmp;
    // js语言特性，要根据正负的不同做不同处理
    if (x > 0) {
      x = Math.floor(x / 10);
    } else {
      x = Math.ceil(x / 10);
    }
  }
  return res;
};
