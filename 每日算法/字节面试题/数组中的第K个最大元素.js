// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

var findKthLargest = function(nums, k) {
    // 尝试用快排解决
    // 因为快排每次都会的带pivot所在的位置
    // 判断位置与nums.length - k 的关系进行区分，不用完全排序，每次走一个数组即可
    let left = 0;
    let right = nums.length - 1;
    const target = nums.length - k;

    // 因为一定找得到，所以可以写死
    while(true){
        const index = partition(nums, left, right);
        if(index == target) return nums[index];
        if(index < target){
            left = index + 1;
        }else{
            right = index - 1;
        }
    }
    function partition(nums, left, right) {
        const pivot = nums[left]; // 可以优化选择项的索引，使其随机而非每次都取left，否则极端情况成O(n^2)
        let l = left + 1;
        let r = right;
        while(l < r){
            while(nums[l] <= pivot && l < r) l++;
            while(nums[r] >= pivot && l < r) r--;
            if(l != r) {
                exchange(nums, l, r);
                l++;
                r--;
            }
        }
        if(l == r && nums[r] > pivot) r--;
        exchange(nums, r, left);
        return r;
    }
    function exchange(arr, left, right){
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
};

var findKthLargest = function(nums, k) {
    // 堆排序
    // 建最大堆
    // 不需要全部都建堆，只需要建k次然后取出nums倒数第7个就可以了
    // 当然得初始化
    // 注：k如果超过一半时，其实可反过来找len-k+1个最小元素，即是第k个最大元素 这样堆的空间复杂度会小(没写)
    heapSort(nums);
    return nums[nums.length - k];

    function heapSort(arr){
        buildHeap(nums);// 初始化，建最大堆
        for(let i = 0 ; i < k; i++){
            exchange(nums, 0, nums.length - 1 - i);
            buildOne(nums, nums.length - i - 1, 0);
        }
    }
    function buildHeap(nums){
        for(let i = (nums.length/2 - 1) | 0; i >= 0; i--){
            buildOne(nums, nums.length, i);
        }
    }
    function buildOne(arr, heapSize, start){
        let left = start * 2 + 1;
        let right = left + 1;

        let largest = start;

        // 这里left 不<= heapSize 是因为，如果仅看值的话，确实可以达到，但是作为数组下标，left和right最多只能到heapSize-1
        if(arr[left] > arr[largest] && left < heapSize) largest = left;
        if(arr[right] > arr[largest] && right < heapSize) largest = right;

        if(largest !== start){
            exchange(arr, start, largest);
            // 交换之后对子节点也要进行堆排序，不然就不符合堆排序的特点了
            buildOne(arr, heapSize, largest);
        }
    }

    function exchange(arr, index1, index2){
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
};