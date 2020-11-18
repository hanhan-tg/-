// 给定两个二叉树，编写一个函数来检验它们是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 方法一：递归法，DFS
    // if(!p && !q) return true;
    // if( !p || !q || (p.val != q.val)) return false;
    // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    // 复杂度分析
    // 时间复杂度： O(N)  N为节点数，每个节点都要且仅要比较一次
    // 空间复杂度： O(h)  遍历时递归栈的最大空间是 O(h), h 为二叉树的高度。

    // 方法二：根据前序遍历和中序遍历来判断
    // function pre(node, arr){
    //     if(node == null){
    //         arr.push(null);
    //         return;
    //     }
    //     arr.push(node.val);
    //     pre(node.left, arr);
    //     pre(node.right, arr);
    // }
    // function mid(node, arr){
    //     arr.push(null);
    //     if(node == null){
    //         return;
    //     }
    //     mid(node.left, arr);
    //     arr.push(node.val);
    //     mid(node.right, arr);
    // }
    // var pPre = [];
    // var pMid = [];
    // var qPre = [];
    // var qMid = [];

    // pre(p, pPre);
    // mid(p, pMid);

    // pre(q, qPre);
    // mid(q, qMid);
    // if(pPre.toString() == qPre.toString() && pMid.toString() == qMid.toString()) return true;
    
    // return false;
    // 复杂度分析
    // 时间复杂度： O(N) 一共遍历节点数总和*2次，
    // 空间复杂度： O(N) 多出四个同样大小的数组

    // 方法三：BFS
    //      一层一层的比较，用队列处理
    var queueP = [p];
    var queueQ = [q];
    while(queueP.length && queueQ.length){
        var newP = queueP.shift();
        var newQ = queueQ.shift();
        if(!newP && !newQ){
            continue;
        }
        if(!newP || !newQ || newP.val !== newQ.val){
            return false;
        }
        queueP.push(newP.left, newP.right);
        queueQ.push(newQ.left, newQ.right);
    }
    return true;
    // 复杂度分析
    // 时间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个二叉树的节点数。
    //            对两个二叉树同时进行广度优先搜索，只有当两个二叉树中的对应节点都不为空时才会访问到该节点，
    //            因此被访问到的节点数不会超过较小的二叉树的节点数。
    // 空间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个二叉树的节点数。
    //            空间复杂度取决于队列中的元素个数，队列中的元素个数不会超过较小的二叉树的节点数。

};