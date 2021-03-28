// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 思路1：
    // 合并，排序，找答案
    // nums1.push(...nums2);
    // nums1.sort((a,b) => a-b);
    // console.log(nums1)
    // if(nums1.length % 2 === 1) return nums1[(nums1.length - 1) / 2];
    // return (nums1[nums1.length / 2 - 1] + nums1[ nums1.length / 2 ]) / 2;

    // 思路2：
    // 用一个数组保存合并后的数组
    // 两个数组分别走一个指针，小的push进新数组然后++
    const arr = [];
    let point1 = 0;
    let point2 = 0;
    // 先处理正常情况
    while(point1 < nums1.length && point2 < nums2.length){
        if(nums1[point1] < nums2[point2]){
            arr.push(nums1[point1]);
            point1++;
        }else{
            arr.push(nums2[point2]);
            point2++;
        }
    }
    // 此时一个数组走完了
    if(point1 < nums1.length){
        // 说明数组1还有
        while(point1 < nums1.length){
            arr.push(nums1[point1]);
            point1++;
        }
    }
    if(point2 < nums2.length){
        // 说明数组2还有
        while(point2 < nums2.length){
            arr.push(nums2[point2]);
            point2++;
        }
    }
    // 此时数组合并完成
    if(arr.length % 2 === 1) return arr[(arr.length - 1) / 2];
    return (arr[arr.length / 2 - 1] + arr[ arr.length / 2 ]) / 2;
    // O(m+n)
    // O(m+n)
};