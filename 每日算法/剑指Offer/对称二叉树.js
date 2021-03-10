// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var isSymmetric = function(root) {
    // 重点是获得对称节点，然后比较他们的值，在往下走，继续比较对称的子节点
    return !root ? true : recur(root.left, root.right)
    function recur(node1, node2){
        if(!node1 && !node2) return true;
        if(!node1 || !node2 || node1.val != node2.val) return false;
        return recur(node1.left, node2.right) && recur(node1.right, node2.left);
    } 
};
/* 
var isSymmetric = function (root) {
    // 没做完的解法，错误？？？
    // bfs
    // 把每层的值都存起来，然后reverse，如果相同，则该层是对称，否则不是对称
    if(!root) return true;
    let nodeArr = [root];
    let valArr = [];
    let sonNodeArr = [];
    while(nodeArr.length){
        const node = nodeArr.shift();
        if(!node) {
            valArr.push(0);
            continue;
        }
        sonNodeArr.push(node.left);
        sonNodeArr.push(node.right);
        valArr.push(node.val);

        console.log(nodeArr, nodeArr.length)
        if(!nodeArr.length){
            console.log(valArr,JSON.stringify([...valArr]) != JSON.stringify(valArr.reverse()), [...valArr], valArr.reverse())
            nodeArr = sonNodeArr;
            sonNodeArr = [];
            // 不用toString是因为如果出现1和"1"的情况也会相等
            if(JSON.stringify([...valArr]) != JSON.stringify(valArr.reverse())){
                return false;
            }
            valArr = [];
        }
    }
    console.log(valArr)
    return true;
};
*/