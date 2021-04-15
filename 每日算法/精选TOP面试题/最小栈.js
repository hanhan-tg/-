// https://leetcode-cn.com/problems/min-stack/


/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minQueue = [];
  this.len = 0;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  this.len++;
  let i = 0;
  while (this.minQueue[i] < x && i < this.len) {
      i++;
  }
  this.minQueue.splice(i, 0, x);
  return this.stack.length;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  if (this.stack.length == 0) {
      return null;
  } else {
      const val = this.stack.pop();
      const index = this.minQueue.indexOf(val);
      this.minQueue.splice(index, 1);
      this.len--;
      return val;
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  if (this.len == 0) return null;
  return this.stack[this.len - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  if (this.len == 0) return null;
  return this.minQueue[0];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/