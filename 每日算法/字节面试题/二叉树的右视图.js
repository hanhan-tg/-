// https://leetcode-cn.com/problems/binary-tree-right-side-view/

var rightSideView = function(root) {
    if(!root) return [];
    // 层序遍历，记录每层的最右边一个结点
    let cur = [root];// 存储当前遍历层的结点
    let next = [];// 存储下一层的结点
    const res = [];
    while(cur.length){
        const node = cur.shift();
        if(node.left) next.push(node.left);
        if(node.right) next.push(node.right);

        if(cur.length === 0){
            // 说明当前node就是该层的最右边一个
            res.push(node.val);
            cur = next;
            next = [];
        }
    }
    return res;
    // O(n)
    // O(n)
};
var rightSideView = function(root) {
    if(!root) return [];
    // dfs
    // 用一个layer来存储当前结点所在的层数，然后遍历节点，先左后右，所以对于每一层来说，最后被赋值的肯定是最右边的那个结点
    // 最后就会遍历到右下角节点，对每个结点都可赋值arr[layer] = val;
    // 最后结果会留下最右边的
    const arr = [];
    const dfs = (node, layer) => {
        if(!node) return ;
        arr[layer] = node.val;
        dfs(node.left, layer + 1);
        dfs(node.right, layer + 1);
    };
    dfs(root, 0);
    return arr;
};