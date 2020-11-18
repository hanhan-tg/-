// 给定一个 N 叉树，返回其节点值的前序遍历。

function Node(val, children) {
    this.val = val;
    this.children = children;
}
var preorder = function(root) {
    // DFS
    // const arr = [];
    // function f(root){
    //     if(!root){
    //         return;
    //     }
    //     arr.push(root.val);
    //     for(var i = 0 ; i < root.children.length; i++){
    //         f(root.children[i]);
    //     }
    // }
    // f(root);
    // return arr;
    // 时间复杂度： O(N)
    // 空间复杂度： O(N)

    // 迭代，即BFS
    if(!root){
        return [];
    }
    let queue = [root];
    const valArr = [];
    while(queue.length){
        const node = queue.shift();
        valArr.push(node.val);
        if(node.children.length > 0){
            // 将node的子节点放在node的兄弟节点之前就能先遍历node的子节点
            queue = node.children.concat(queue);
        }
    }
    return valArr;
    // 时间复杂度： O(N)
    // 空间复杂度： O(N)
};