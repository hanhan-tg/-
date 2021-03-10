// 给定一个二叉树，在树的最后一行找到最左边的值。

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var findBottomLeftValue = function(root) {
    // BFS
    // 思路：一层一层的走，如果当前层的下一层没有数据了，那就直接返回当前层的第一个
    // 实现一：
    // if(!root) return ;
    // let queue = [root];
    // let temp = [];
    // let len = queue.length;
    // while(len){
        // temp = [...queue]; // 把当前层保留下来，因为后续的shift会破坏当前层
        // for(let i = 0 ; i < len; i++){
            // const node = queue.shift();
            // if(node.left){
                // queue.push(node.left);
            // }
            // if(node.right){
                // queue.push(node.right);
            // }
        // }
        // len = queue.length; // 计算下一层是否有值
    // }
    // return temp[0].val;
    // 实现二：
    // let queue = [];
    // let res;
    // queue.push(root);
    // while (queue.length > 0) {
    //     let current = queue.shift();
    //     res = current.val;
    //     // 先把右子节点放入队列中，那么一层最后放入的节点就是最左边的节点，一旦没有下一层，最后出来的节点就是最左边的值
    //     if (current.right) { 
    //         queue.push(current.right);
    //     }
    //     if (current.left) {
    //         queue.push(current.left);
    //     }
    // }
    // return res;

    // 复杂度分析
    // 时间复杂度： O(N)   遍历N个节点
    // 空间复杂度： O(N)   N个节点都要入队列(实现二比实现一更省空间)


    // DFS 
    // 思路：把每一层的最左边的值存下来，然后返回最后一层的
    // const leftMost = [];
    // dfs(root, leftMost, 0);
    // return leftMost[leftMost.length - 1]; // 最后数组中对应索引存储的都是对应层的最左值

    // function dfs(root, leftMost, layer){
    //     if(root){
    //         leftMost[layer++] = root.val;
    //         dfs(root.right, leftMost, layer); // 先右再左，就可以把当前层最左边的值存下来
    //         dfs(root.left, leftMost, layer);
    //     }
    // }
    // 复杂度分析
    // 时间复杂度： O(N)  对每个节点都得调用一次dfs
    // 空间复杂度： O(N)  N为节点数

    // 思路二：
    // 树的最后一行找到最左边的值，转化一下就是找第一个出现的深度最大的节点，这里用先序遍历去做，
    // 其实中序遍历也可以，只需要保证左节点在右节点前被处理即可。 
    // 具体算法为，先序遍历 root，维护一个最大深度的变量，记录每个节点的深度，如果当前节点深度比最大深度要大，则更新最大深度和结果项。
    let maxDepth = 0;
    let res = root.val;

    dfs(root.left, 0);
    dfs(root.right, 0);

    return res;

    function dfs(cur, depth) {
        if (!cur) {
            return;
        }
        const curDepth = depth + 1;
        // 核心所在，第一个出现的更深的节点就是那个层左节点，深度最深，则是最左
        if (curDepth > maxDepth) {
            maxDepth = curDepth;
            res = cur.val;
        }
        dfs(cur.left, curDepth);
        dfs(cur.right, curDepth);
    }
    // 时间复杂度：$O(N)$，其中 N 为树的节点总数。
    // 空间复杂度：$O(h)$，其中 h 为树的高度。
};