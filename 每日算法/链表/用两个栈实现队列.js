/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */
var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

CQueue.prototype.appendTail = function(value) {
    // this.inStack.push(value);
    // 答案只需要一条语句。如果outStack还有内容，直接在inStack中插入不就顺序乱了吗？？不得先把outStack的内容原封的放回到inStack中吗？
    // 用下面的也没问题，只是性能上更为损耗，我感觉应该是他给的用例的问题

    // if(this.outStack.length != 0){
    //     while(this.outStack.length){
    //         this.inStack.push(this.outStack.pop());
    //     }
    // }
    // this.inStack.push(value);

};


CQueue.prototype.deleteHead = function() {
    if(this.outStack.length == 0 && this.inStack.length == 0){
        return -1;
    }
    if(this.outStack.length == 0 ){
        this.inStack.forEach(ele => {
            this.outStack.push(ele);
        });
    }
    return this.outStack.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */