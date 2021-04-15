// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const hash = {};
  const ans = [];
  if (nums1.length < nums2.length) {
    getAns(nums1, nums2);
  } else {
    getAns(nums2, nums1);
  }
  return ans;

  function getAns(nums1, nums2) {
    // nums1.length < nums2.length
    for (let i = 0; i < nums1.length; i++) {
      hash[nums1[i]] = hash[nums1[i]] + 1 || 1;
    }
    for (let i = 0; i < nums2.length; i++) {
      if (ans.length == nums1.length) return; // 如果小的都出来了，那就可以不用继续判断，直接返回即可
      if (hash[nums2[i]]) {
        ans.push(nums2[i]);
        hash[nums2[i]]--;
      }
    }
  }
  // O(m + n)
  // O(min(m, n))
};

var intersect = function (nums1, nums2) {
  // 排序，那就可以双指针，同步走，走到小的结束为止
  // O(m*logm + n*logn)
  // O(min(m, n))
};

