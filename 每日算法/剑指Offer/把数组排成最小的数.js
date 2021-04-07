// https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/

// https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/mian-shi-ti-45-ba-shu-zu-pai-cheng-zui-xiao-de-s-4/

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums = nums.sort((a, b) => {
    val = +("" + a + b) > +("" + b + a);
    return val ? 1 : -1;
  });
  return nums.join("");
};
