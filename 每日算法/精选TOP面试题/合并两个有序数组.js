// https://leetcode-cn.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 逆向双指针
  // 直接从最大的开始比，从nums1后面开始放
  let p1 = m - 1;
  let p2 = n - 1;
  let tail = m + n - 1;
  let cur;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      // 因为是对nums1原地操作，所以当p2遍历完nums2之后p1剩余的本来就更小，因为本来是有序的，所以可以直接退出
      break;
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
};
