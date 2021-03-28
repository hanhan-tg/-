// https://leetcode-cn.com/problems/flatten-nested-list-iterator/

// https://leetcode-cn.com/problems/flatten-nested-list-iterator/solution/bian-ping-hua-qian-tao-lie-biao-die-dai-ipjzq/

/**
 * 思路二：
 *      用栈，开描述没懂看代码就懂了
 */

/**
 * 
 * 思路1： DFS
 *      把整个数组看成一棵多叉树，遍历即可
 *  时间复杂度：初始化为 O(n)，next 和 hasNext 为 O(1)。其中 n 是嵌套的整型列表中的元素个数。
 *  空间复杂度：O(n)。需要一个数组存储嵌套的整型列表中的所有元素。
 */
var NestedIterator = function(nestedList) {
    this.ans = [];
    const dfs = (nestedList) => {
        for (const nest of nestedList) {
            if (nest.isInteger()) {
                this.ans.push(nest.getInteger());
            } else {
                dfs(nest.getList());
            }
        }
    }
    dfs(nestedList);
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.ans.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.ans.shift();
};

















/**
 * 第一次看题没写完的思路
 * 思路：对数组中元素进行判断，非数组，则直接加入结果，是数组的话递归
 */


var NestedIterator = function(nestedList) {
    this.index = 0;
    this.arr = nestedList;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.index !== undefined;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    let val = this.arr[this.index];
    if(Array.isArray(val)){
        // 说明需要进去数组内部处理
        let newNext = this.newNext(val);
        let ans = newNext();
        if(ans[1]){
            this.index++;
        }
        return ans[0];
    }else{
        this.index++;
        return val;
    }
};
NestedIterator.prototype.newNext = (arr) => {
    let index = 0;
    return function () {
        if(index == arr.length - 1) return [val, true];
        let val = this.arr[index];
        if(Array.isArray(val)){
            let newNext = this.newNext(val);
            let ans = newNext();
            if(ans[1]){
                index++;
            }
            return ans[0];
        }else{
            index++;
            return [val, false];
        }
    }
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/