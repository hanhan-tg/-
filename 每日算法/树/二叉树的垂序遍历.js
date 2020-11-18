function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * 遍历每个节点，给每个节点添加相应的X Y坐标。再根据x相同的来进行y的比较，以及val的比较，最后导出结果即可
> 第二次dfs貌似没必要，会多浪费性能，可以在后面的循环中直接通过对res对应下标加上xArr中的最小值，以把坐标变为正数来处理，可以节省时间.
> 但是经测试，发现竟然更慢了，而且空间消耗更多了？？？即两行注释代码处，直接用以替换其上一条语句 
 */
var verticalTraversal = function(root) {
    //dfs
    if(!root){
        return;
    }
    let xArr = [];
    const res = [];
    dfs(root, 0, 0); // 给每个节点都添加相应xy坐标
    const times = Math.max(...xArr) - Math.min(...xArr) + 1; // 循环次数，+1是因为还有坐标为0的存在
    dfs(root, Math.abs(Math.min(...xArr)), 0); //将每个节点的x坐标全变为正数，以方便数组存储 
    // const minX = Math.min(...xArr);
    for(let i = 0 ; i < times; i++){
        // 找到i对应的节点的x的值
        const nodeArr = [];
        res[i] = [];
        findNode(root, i, nodeArr); // 遍历完之后nodeArr中存放x为i的若干节点
        // findNode(root, i + minX, nodeArr)
        nodeArr.sort( (a, b) =>b.y - a.y || a.val - b.val); // 此时nodeArr中 单个位置也已经排序了
        nodeArr.forEach(item=>{
            res[i].push(item.val); // 将nodeArr中的值依次放入到res中
        });
    }
    return res;

    // 找x为i的所有节点
    function findNode(root, i, nodeArr){
        if(!root){
            return ;
        }
        if(root.x == i){
            nodeArr.push(root);
        }
        findNode(root.left, i, nodeArr);
        findNode(root.right, i, nodeArr);
    }
    // dfs给每个节点添加x，y值
    function dfs(root, xVal, yVal){
        if(!root){
            return;
        }
        root.x = xVal;
        root.y = yVal;
        xArr.push(xVal);
        dfs(root.right, root.x + 1, root.y - 1);
        dfs(root.left, root.x - 1, root.y - 1);
    }

    // 时间复杂度： O(N*logN)  排序时间
    // 空间复杂度： O(N)   N为节点数
};