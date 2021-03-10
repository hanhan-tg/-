// https://leetcode-cn.com/problems/trapping-rain-water/

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