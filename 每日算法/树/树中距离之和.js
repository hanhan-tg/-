function TreeNode(val){
    this.val = val;
    this.children = [];
}
/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(N, edges) {
    // 给每个节点添加一个属性，depth，即它所在的深度
    // 两个节点的距离就是两者深度之和
    

    function setTree(arr){
        let root = new TreeNode(arr[0][0]);
        arr.forEach( v =>{
            
        })
    }
    function setDepth(root){
        if(!root){
            return;
        }
        root.depth = getDepth(root);
        setDepth(root.left);
        setDepth(root.right);
    }
    function getDepth(root){
        if(!root){
            return 0;
        }
        var leftDeep = maxDepth(root.left);
        var rightDeep = maxDepth(root.right);
        return Math.max(leftDeep,rightDeep) + 1;
    }
}; 