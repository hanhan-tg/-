// https://leetcode-cn.com/problems/next-permutation/

// https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // 从右往左走
    // 找到第一个下降的数i，然后把之前遍历的数(即i后的数)拿出来，比较，找出比该数大且大的最小的数，交换，在对该数之后的数组进行升序排序
    if (nums.length == 1) return nums;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            // 说明该换了
            let min = i + 1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[min] && nums[j] - nums[i] > 0) {
                    min = j;
                }
            }
            // 此时右边大于i的最小值出来了
            exchange(nums, i, min);
            // 交换完i j 之后要对i之后的数组进行升序排序
            quickSort(nums, i+1, nums.length - 1);
            return ;
        }
    }
    quickSort(nums, 0, nums.length - 1);

    function exchange(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    } 
    
    function quickSort(arr, start, end) {
        if (start >= end) return;
        const middle = partition(arr, start, end); // 返回基数的位置，不一定是数组的中间位置
        quickSort(arr, start, middle - 1);
        quickSort(arr, middle + 1, end);
    }

    function partition(arr, start, end) {
        // 取数组开头作为基数
        let pivot = arr[start];
        // 双指针
        let left = start + 1;
        let right = end;

        while (left < right) {
            // 移动左、右指针
            while (left < right && arr[left] <= pivot) left++;
            while (left < right && arr[right] >= pivot) right--;
            // 此时左指针指向比技术大的值，右指针指向比基数小的值
            // 比较交换
            if (left < right) {
                exchange(arr, left, right);
                left++;
                right--;
            }

        }
        // 出循环后
        if (left == right && arr[left] > pivot) right--;
        // 此时的right指向的数<=pivot
        // 把基数和最后一数交换位置
        exchange(arr, start, right);
        // 最后right的位置就是基数所在的位置
        return right;
    }
};