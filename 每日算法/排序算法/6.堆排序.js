// 堆排序
// 从length/2 - 1开始，让它和它的两个子节点比较(前提是存在)，大的换上来

function heapSort(arr){
    // 初始化最大堆
    buildMaxHeap(arr);
    for(let i = arr.length - 1; i > 0; i--){
        exchange(arr, 0, i);
        maxHeapify(arr, 0, i);
    }
}
function buildMaxHeap(arr){
    for(let i = (arr.length/2 - 1) | 0; i >= 0; i--){
        maxHeapify(arr, i, arr.length);
    }
}

function maxHeapify(arr, i, maxSize){
    // 左子结点下标
    let left = 2*i + 1;
    // 右子结点下标
    let right = left + 1;
    let largest = i;

    if(left < maxSize && arr[left] > arr[largest]) largest = left;
    if(right < maxSize && arr[right] > arr[largest]) largest = right;
    if(largest !== i){
        // 说明父节点比某个子节点小
        exchange(arr, i, largest);
        // 对交换后的子节点重新变为最大堆，因为根节点的值可能比子节点的子节点的值还要小
        maxHeapify(arr, largest, maxSize);
    }
}

function exchange(arr, index1, index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}