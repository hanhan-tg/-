// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/

// 由于js数组的特性，可以直接用一个栈来处理， unshift， pop
// 省略代码


// 用两个栈
// 存，全都存tail里，
// 取，要取的时候把tail里的全都按栈的方式移动到head中，所以每次取的时候取得都是最先进tail的，也就是head中的

var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value); // inStack只负责进
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.outStack.length){ // 如果outStack没有空，就继续用该栈中的pop
        return this.outStack.pop();
    }
    while(this.inStack.length){ // outStack为空，把inStack中的依次放入
        this.outStack.push(this.inStack.pop());
    }
    if(!this.outStack.length){ // 如果此时outStack为空，返回-1
        return -1;
    }
    return this.outStack.pop(); // 正常返回outStack的栈顶
};
// 时间复杂度：$O(N)$
// 空间复杂度：$O(N)$