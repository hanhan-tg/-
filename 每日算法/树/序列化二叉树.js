// 请实现两个函数，分别用来序列化和反序列化二叉树。
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/solution/shou-hua-tu-jie-dfshe-bfsliang-chong-jie-fa-er-cha/
// DFS + 前序遍历
// 
var serialize = function(root) {
    if(!root){
        return 'X,';
    }
    return root.val + ',' + serialize(root.left) + serialize(root.right);
};

var deserialize = function(data) {
    const arr = data.split(',');
    const dfs = (arr) => {
        const val = arr.shift();
        if(val == 'X'){
            return null;
        }
        const root = new TreeNode(val);
        root.left = dfs(arr);
        root.right = dfs(arr);
        return root;
    }
    return dfs(arr);
};
