// https://leetcode-cn.com/problems/sort-an-array/

var sortArray = function(nums) {
    // 快排实现
    function quickSort (arr, start, end) {
        if(start >= end) return;
        const mid = partition(arr, start, end);
        quickSort(arr, start, mid - 1);// 对基数前面的数组排序
        quickSort(arr, mid + 1, end);// 对基数后面的数组排序
    }
    /**
     * 
     *  将数组以一个基数分为左右两部分，左边的比基数大，右边的比基数小
     *  返回基数最后所在的索引
     * */
    function partition(arr, start, end){
        // 以数组第一项为基数
        const pivot = arr[start];
        // 定义双指针
        let left = start + 1;
        let right = end;
        while(left < right){
            while(left < right && arr[left] <= pivot) left++;
            while(left < right && arr[right] > pivot) right--;
            if(left < right){
                exchange(arr, left, right);
                left++;
                right--;
            }
        }
        if(left === right && arr[left] > pivot) right--;
        exchange(arr, start, right);
        return right;
    }
    function exchange(arr, index1, index2){
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    quickSort(nums, 0, nums.length - 1);
    return nums;
};
var sortArray = function(nums) {
    // 二元选择排序
    // 思路：一次遍历，找到最小的，放前面，找到最大的，放后面

    for(let i = 0 ; i < nums.length / 2; i++){
        let minIndex = i;
        let maxIndex = i;
        for(let j = i; j < nums.length - i; j++){
            if(nums[minIndex] > nums[j]) minIndex = j;
            if(nums[maxIndex] < nums[j]) maxIndex = j;
        }
        let temp = nums[minIndex];
        nums[minIndex] = nums[i];
        nums[i] = temp;
        
        // 因为最小值会和i换位置，换了之后原来的i，也就是最大值的位置变成了minIndex
        if(maxIndex == i) maxIndex = minIndex;

        temp = nums[maxIndex];
        nums[maxIndex] = nums[nums.length - 1 - i];
        nums[nums.length - 1 - i] = temp;
    }
    return nums;
};
var sortArray = function(nums) {
    // 插入排序
    // 思路：从第二个位置开始，往前走，当前面的数i-1比自己大，则把前面的数赋值给自己位置i，不断循环，最后留出一个坑，再把自己填进去即可
    for(let i = 1; i < nums.length; i++){
        // 保留当前位置的数据
        const cur = nums[i];
        let j = i - 1;
        // 升序
        while(j >= 0 && nums[j] > cur){
            nums[j + 1] = nums[j];
            j--; 
        }
        nums[j + 1] = cur;
    }
    return nums;
};