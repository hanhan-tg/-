// https://leetcode-cn.com/leetbook/read/sort-algorithms/eul7hm/

// 思路：
// 对数组，取一个数val，然后遍历数组，对数i，如果i<val，则放在val左边，如果i>val，则放在val右边
// 一次循环之后比val小的全在val左边，比val大的全在val右边
// 以val为节点再次把左右分成两个数组进行如此排序，最后全部排序完成
// 时间复杂度：O(nlogn)
// 空间复杂度：O(1)
function quickSortEnter(arr){
    quickSort(arr, 0, arr.length - 1);
}
function quickSort(arr, start, end){
    if(start >= end) return;
    const middle = partition(arr, start, end); // 返回基数的位置，不一定是数组的中间位置
    quickSort(arr, start, middle - 1);
    quickSort(arr, middle + 1, end);
}

function partition(arr, start, end){
    // 取数组开头作为基数
    let pivot = arr[start];
    // 双指针
    let left = start + 1;
    let right = end;

    while(left < right){
        // 移动左、右指针
        while(left < right && arr[left] <= pivot) left++;
        while(left < right && arr[right] >= pivot) right--;
        // 此时左指针指向比技术大的值，右指针指向比基数小的值
        // 比较交换
        if(left < right){
            exchange(arr, left, right);
            left++;
            right--;
        }

    }
    // 出循环后
    if(left == right && arr[left] > pivot) right--;
    // 此时的right指向的数<=pivot
    // 把基数和最后一数交换位置
    exchange(arr, start, right);
    // 最后right的位置就是基数所在的位置
    return right;
}

function exchange(arr, index1, index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
const arr = [2,3,4,51,2,3,1,6];
quickSortEnter(arr);
console.log(arr);