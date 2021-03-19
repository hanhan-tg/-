// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/

// 直接用sort在取小的还很快
var getLeastNumbers = function(arr, k) {
    if(k === 0) return [];
    // 冒泡排序
    // 把最小的往后放
    // 一共循环k次，然后取出最后的k个数
    for( let i = 0; i < k ; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] < arr[j + 1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr.slice(arr.length - k);
};
// 尝试优化
var getLeastNumbers = function(arr, k) {
    // 从运行结果时间来看，貌似更长了？？？
    if(k === 0) return [];
    // 冒泡排序
    // 把最小的往后放
    // 一共循环k次，然后取出最后的k个数
    let goOn = true;
    let indexOfLastUnsortedElement = 0; 
    let wrappedIndex = -1;
    while(goOn){
        goOn = false;
        for(let j = 0; j < arr.length - 1 - indexOfLastUnsortedElement && indexOfLastUnsortedElement < k; j++){
            if(arr[j] < arr[j + 1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                goOn = true;
                wrappedIndex = j;
            }
        }
        indexOfLastUnsortedElement =  arr.length - 1 - wrappedIndex;
    }
    return arr.slice(arr.length - k);
};