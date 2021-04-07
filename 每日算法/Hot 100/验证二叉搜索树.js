// https://leetcode-cn.com/problems/validate-binary-search-tree/

var isValidBST = function (root) {
    return f(root, -Infinity,Infinity)
    
    function f(root, lower, upper){
        if(!root) return true;
        if(root.val <= lower || root.val >= upper){
            return false;
        }
        return f(root.left, lower, root.val) && f(root.right, root.val, upper)
    }
};
var isValidBST = function (root) {
    // 中序遍历一定是升序的
    if(!root || root.length == 1) return true;
    const arr = [];
    dfs(root);
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <= arr[i - 1]) return false;
    }
    return true;
    
    function dfs(root){
        if(!root) return;
        dfs(root.left)
        arr.push(root.val);
        dfs(root.right);
    }
};