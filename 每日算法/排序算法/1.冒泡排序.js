// 冒泡排序基本思路：
// 每次循环将最大的元素放到最后，直到循环结束
// 时间复杂度O(n)

const f = (arr) => {
  for (let i = 0; i < arr.length - 1; j++) {
    for (let j = i; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// 优化思路：
// 1. 除了使用变量记录当前轮次是否发生交换外，再使用一个变量记录上次发生交换的位置，下一轮排序时到达上次交换的位置就停止比较。
// 2. 使用一个变量记录当前轮次的比较是否发生过交换，如果没有发生交换表示已经有序，不再继续排序；
const f = (arr) => {
  let indexOfLastUnsortedElement = arr.length - 1; // 记录交换停止的位置
  let goOn = true; // 作为是否继续循环的标志位
  let wrappedIndex = -1;
  while (goOn) {
    goOn = false;
    for (let j = 0; j < indexOfLastUnsortedElement; j++) {
      if (arr[j] > arr[j + 1]) {
        //  正常交换
        const temp = arr[j + 1];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // 标志位，变为true说明发生了交换
        goOn = true;
        // 记录最后交换的位置
        wrappedIndex = j;
      }
    }
    indexOfLastUnsortedElement = wrappedIndex; // 说明下次交换到indexOfLastUnsortedElement就行了
  }
  return arr;
};
