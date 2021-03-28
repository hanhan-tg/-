
// https://leetcode-cn.com/leetbook/read/sort-algorithms/euivj1/
// const result = [];
function mergeSort(arr, start, end, result) {
    if(start == end) return;
    const mid = (start + end) / 2 | 0;
    mergeSort(arr, start, mid, result);
    mergeSort(arr, mid + 1, end, result);
    merge(arr, start, end, result);
}

function merge(arr, start, end, result){
    let end1 = (start + end) / 2 | 0;
    let start1 = start;
    let start2 = end1 + 1;
    let end2 = end;

    let resultIndex = start;

    while(start1 <= end1 && start2 <= end2){
        if(arr[start1] <= arr[start2]){
            result[resultIndex++] = arr[start1++];
        }else{
            result[resultIndex++] = arr[start2++];
        }
    }
    while(start1 < end1){
        result[resultIndex++] = arr[start1++];
    }
    while(start2 < end2){
        result[resultIndex++] = arr[start2++];
    }

    for(let i = start; i<= end; i++){
        arr[i] = result[i];
    }
}
function exchange(arr, left, right){
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}