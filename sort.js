// 排序的本质是比较和交换
function compare(max, min){ // 比较之后得出结果是否需要交换
    return max > min ? true : false;
    // arr.sort(function(){}) 传参的函数就是compare函数，需要自己传入
}
function exchange(arr, a, b){ // 将数组中a、b位置的值进行交换
    var temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}
function sort(){ // 这个sort排序可以是冒泡排序也可以是其他排序

}
var arr = [2,1,4,6,3,7,5,9,0];

// 冒泡排序，每一次循环都把最大的数放到最后 复杂度为O(n*n)
function sortBubble(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length - 1 - i; j++){ // j的判断条件可以多-i，可以节省性能
            if(compare(arr[j], arr[j+1]) ){
                exchange(arr, j, j+1);
            }
        }
    }
    // console.log(arr);
}
sortBubble(arr);
console.log(arr);

// 选择排序，内层循环，每一圈选出最大的，然后放在最后(也可以是选最小的放前面) 时间复杂度为O(n*n)
function sortSelect(arr){
    for(var i = 0 ; i < arr.length ; i ++){
        var maxIndex = 0; // 只需要管下标就可以了
        for(var j = 0 ; j < arr.length - i; j++){
            if( compare(arr[j], arr[maxIndex])){
                maxIndex = j;
            }
        }
        exchange(arr, maxIndex, arr.length - i - 1); // -1 注意
    }
}
// sortSelect(arr);
// console.log(arr);


// 归并排序 时间复杂度O(n*log(n))
(function (){
    function mergeSort(arr){
        const { length } = arr; 
        if(length > 1) {
            var mid = Math.floor(length / 2);
            var left = mergeSort(arr.slice(0, mid));
            var right = mergeSort(arr.slice(mid, length));
            // slice不对原数组进行操作，splice对原数组进行操作，都返回截取后的值
            arr = merge(left, right);
        }
        return arr;
    }
    
    function merge(left, right){
        var i = 0;
        var j = 0;
        var result = [];
        while(i < left.length && j < right.length){
            result.push(compare(left[i], right[j]) ? right[j++] : left[i++]);
        }
        return result.concat(i < left.length ? left.slice(i) : right.slice(j));
    }

    var arr = [5,4,3,2,1,3,5,7];
    arr = mergeSort(arr);
    // console.log(arr);
}());

// 快速排序 时间复杂度为O(n*log(n))，且通常性能比其他复杂度为O(n*log(n))的排序算法要好
// 简单快速排序， 比我小的放左边，比我大的放右边
function sortQuickEasy(arr){
    if(arr == null || arr.length == 0) return [];
    var leader = arr[0];
    var left = [];
    var right = [];
    for(var i = 1 ; i < arr.length; i++){
        arr[i] < leader ? left.push(arr[i]) : right.push(arr[i]);
    }
    left = sortQuickEasy(left); 
    right = sortQuickEasy(right); 
    left.push(leader);
    return left.concat(right);
}
// console.log(sortQuickEasy(arr));

// 标准快速排序
function sortQuickStd2(arr, begin, end){
    if (begin >= end - 1) return;
    var left = begin;
    var right = end;
    do {
        do left++; while(left < right && arr[left] < arr[begin]);
        do right--; while( left < right && arr[right] > arr[begin]);
        if(left < right) exchange(arr, left, right);
    } while(left < right);
    var swapPoint = left == right ? right - 1 : right;
    exchange(arr, begin, swapPoint);
    sortQuickStd2(arr, begin, swapPoint);
    sortQuickStd2(arr, swapPoint + 1, end);
}
function sortQuickStd(arr){
    sortQuickStd2(arr, 0, arr.length);
}
// sortQuickStd(arr);
// console.log(arr);


function sortQuickStd2(arr, begin, end){
    if( begin >= end - 1) return ;
    var left = begin;
    var right = end;
    do{
        do left++; while( left < right && arr[left] < arr[begin]);
        do right--; while( left < right && arr[right] > arr[begin]);
        if( left < right) exchange(arr, left, right);
    } while(left < right);
    var swapPoint = left == right ? right - 1 : right;
    exchange(arr, begin, swapPoint);
    sortQuickStd2(arr, begin, swapPoint);
    sortQuickStd2(arr, swapPoint + 1, end);
}
// function sortQuickStd(arr){
//     sortQuickStd2(arr, 0, arr.length);
// }

