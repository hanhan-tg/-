// https://leetcode-cn.com/problems/non-overlapping-intervals/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    
    let ans = 0;
    let cur = 0;
    let next = 1;
    // 根据右值的大小排序，因为当前一个区间的右值比后一个区间的左值大说明有重叠区间
    intervals.sort((a,b) => a[1] - b[1]);
    while(next < intervals.length){
        if(intervals[cur][1] > intervals[next][0]){
            //当前一个区间的右值比后一个区间的左值大说明有重叠区间
            ans++;
            next++;
        }else{
            //说明无重叠区间，往后移动
            cur = next;
            next++;
        }
    }
    return ans
};
// 时间复杂度：$O(NlogN)$, N 为数组长度，排序的时间。
// 空间复杂度：$O(1)$。