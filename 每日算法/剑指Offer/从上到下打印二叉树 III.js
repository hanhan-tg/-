// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // 在II的基础上多了个flag控制方向
    // 需要注意的是，是在结果上来控制，而非流程，流程不变，只是最后添加进ans的时候reverse
    if (!root) return [];
    // 层序遍历
    const queue = [root];
    const ans = [];
    let leftToRight = true;
    while (queue.length) {
        // 注释部分适用于一层一层的打印出来，当然，对ans的操作也得稍微改一点
        let len = queue.length;
        const temp = [];
        while (len) {
            const node = queue.shift();
            temp.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            len--;
        }
        if(!leftToRight) {
            temp.reverse();
        }
        ans.push(temp);
        leftToRight = !leftToRight;
    }
    return ans;
};