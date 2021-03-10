// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/submissions/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    // 这个和下面区别主要在于，这里是对A每个节点都和B比较，而下面方法是先找到和B值相同的节点再比较
    return A != null && B != null && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
    function recur(A, B){
        if(!B) return true;
        if(!A || A.val != B.val) return false;
        return recur(A.left,B.left) && recur(A.right,B.right)
    }
    // O(MN)
    // O(N)
};

var isSubStructure = function(A, B) {
    // 先遍历A，当某个节点的值等于B的根节点的值的时候开始比较
    if(!B || !A) return false;

    const nodeArr = [];
    findNode(A, B.val, nodeArr);
    for(let i = 0; i < nodeArr.length; i++){
        if(compare(nodeArr[i], B)) return true;
    }
    return false;

    // 找到所有节点值相同的节点
    function findNode(root, value, nodeArr){
        if(!root) return null;
        if(root.val == value){
            nodeArr.push(root);
        }
        findNode(root.left, value, nodeArr)
        findNode(root.right, value, nodeArr)
    }

    // 比较两个节点
    function compare(parentNode, childNode){
        if(!parentNode) return false;

        if(childNode.val == parentNode.val){
            let left = true;
            let right = true;
            if(childNode.left){
                left = compare(parentNode.left, childNode.left)
            }
            if(childNode.right){
                right = compare(parentNode.right, childNode.right);
            }
            return left && right;
        }
        return false;
    }
};