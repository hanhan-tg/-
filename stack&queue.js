// 用原生js封装栈和队列


function Stack(){
    this.arr = [];
    this.size = 0;
    this.top = function(){
        return this.arr[this.size - 1];
    };
    this.push = function(value){
        this.size++;
        this.arr.push(value);
    };
    this.pop = function(){
        this.size--;
        return this.arr.pop();
    };
    this.clear = function(){
        this.size = 0;
        this.arr = [];
    };
    this.empty = function(){
        return this.size == 0 ;
    }
}

// var stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.arr);
// stack.pop();
// stack.pop();
// console.log(stack.arr);

function Queue(){
    this.arr = [];
    this.push = function(value){
        this.arr.push(value);
    };
    this.pop = function(){
        return this.arr.shift();
    };
}

// var queue = new Queue();
// queue.push(1);
// queue.push(2);
// queue.push(3);
// console.log(queue.arr);
// queue.pop();
// console.log(queue.arr);