// https://leetcode-cn.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 双指针
    // 思路：头尾指针往中间走，当左指针往右走的时候，默认当前当前位置右边的有个比较高的点比左边的最高点还要高
    //      这样对于这个点的储水量只要通过计算左边的最高点减去当前位置的高度就可以了
    //      同理，右边往左走也是，默认当前点左边某个高度比右边最高的还高，就可以通过右边的最高点减去当前位置的高度得到储水量
    //      而左边最高点和右边最高点只会有一个更高，当左边比右边高的时候，就右指针移动，当移动到某个位置的高度比左边高，
    //      则就回到左边走
    //      这样就能保证我只要知道一个方向的最高点就可以计算出储水量
    let left = 0,
        right = height.length - 1,
        left_max = height[left],
        right_max = height[right],
        ans = 0;

    while(left <= right){
        if(left_max <= right_max){
            if(height[left] >= left_max){
                left_max = height[left];
            }else{
                // 如果当前的值比左边最大值小，则当前可以积水
                ans += left_max - height[left];
            }
            left++;
        }else{
            if(height[right] >= right_max){
                right_max = height[right];
            }else{
                ans += right_max - height[right];
            }
            right--;
        }
    }
    return ans;
    // O(n)
    // O(1)
};
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 动态规划
    // 从左往右遍历一遍，找出当前点左边的最高值(包括自身)
    // 从右往左遍历一遍，找出当前点右边的最高值(包括自身)
    // 再从头开始遍历，当前点可以储存的量为两个最高点的小值减去当前高度
    let leftArr = [];
    let rightArr = [];
    let ans = 0;
    const len = height.length;
    leftArr[0] = height[0];
    rightArr[len - 1] = height[len - 1];
    for(let i = len - 2; i >= 0; i --){
        rightArr[i] = Math.max(height[i], rightArr[i + 1]);
    }
    for(let i = 1; i < len; i++){
        leftArr[i] = Math.max(height[i], leftArr[i - 1]);
        // 这里的计算可以在这次循环一起计算，可以节省一次循环的时间
        ans += Math.min(leftArr[i], rightArr[i]) - height[i];
    }
    return ans;
};
var trap = function(height) {
    // 对于每个点来说，他当前点能接水的量为其左边最高点和其右边最高点的更小的那个减去当前点的高度即可
    let sum = 0;
    for(let i = 1; i < height.length - 1; i++){
        let left_max = 0;
        let right_max = 0;
        // 如果j从i-1开始，因为左右最大值初始都为0，所以会出问题，得至少从自身大小开始，同理下面也不能从i+1开始
        for(let j = i; j >= 0; j--){ 
            left_max = Math.max(left_max, height[j]);
        }
        for(let j = i; j < height.length; j++){
            right_max = Math.max(right_max, height[j]);
        }
        sum += Math.min(left_max, right_max) - height[i];
    }
    return sum;
    /*
    思路有问题，上面才正确
    // 找极大值，对两个连续的极大值之间来说，小的决定能接受多少水
    // 这个区间内每个点能接的雨为小的极大值减去该点的高度
    // 先遍历一遍找出极大值来
    // 双指针只走极大值
    // 循环遍历height，一旦离开双指针区间则双指针往后走，
    // 双指针初始一个为-Infinity，一个用indexOf来找
    // 用res来存

    // 如果三个连续的
    const maxArr = [];
    let res = 0;
    for(let i = 0; i < height.length; i++){
        if(i == 0){
            if(height[i + 1] < height[i]) maxArr.push(i);
            continue;
        }
        if(height[i] > height[i - 1] && height[i] > height[i + 1]){
            maxArr.push(i);
        }
    }
    maxArr.push(-Infinity);
    // 已经获得了极大值数组
    // console.log(maxArr)
    let left = maxArr[0];
    let right = maxArr[1];
    let index = 1;
    for(let i = left + 1 ; i < height.length; i++){
        if(i == right){
            left = right;
            right = maxArr[++index];
            if(right == -Infinity) break;
            continue;
        }
        const lower = Math.min(height[left], height[right]);
        res += lower - height[i];
    }
    return res;
    */
};