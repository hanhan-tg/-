// https://leetcode-cn.com/problems/friend-circles/

// 实现一
function Node(i){
    this.val = i
    this.parent = this;
}

function makeSet(x){
    x.parent = x;
}

function findSet(x){
    if(x != x.parent){
        x.parent = findSet(x.parent);
    }
    return x.parent;
}

function union(x, y){
    let xUnion = findSet(x);
    let yUnion = findSet(y);
    if(xUnion !== yUnion){
        xUnion.parent = yUnion;
    }
}

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    // 运用并查集，只要找到树根的数量，就表明有多少个朋友圈

    // 要处理根据i j 出现的顺序，而导致parent的变化导致的问题
    
    // 先通过矩阵来创建树
    const nodeArr = [];
    for(let i = 0 ; i < M.length; i++){
        nodeArr.push(new Node(i));
    }
    for(let i = 0 ; i < M.length; i++){
        for( let j = i + 1; j < M.length; j++){
            if(M[i][j] == 1){
                union(nodeArr[i], nodeArr[j]);
            }
        }
    }
    // console.log(nodeArr.length)
    const res = nodeArr.map( i =>{
        return findSet(i);
    })
    const resSet = new Set(res);
    console.log(resSet)
    const size = resSet.size;
    return size

};


// 实现二  from 西法
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    const nodeArr = [];
    let count = M.length;
    for(let i = 0 ; i < M.length; i++){
        nodeArr.push(new Node(i));
    }
    for(let i = 0 ; i < M.length; i++){
        for( let j = i + 1; j < M.length; j++){
            if(M[i][j] == 1){
                union(nodeArr[i], nodeArr[j]);
            }
        }
    }
    return count

    function Node(i){
        this.val = i
        this.parent = this;
    }

    function makeSet(x){
        x.parent = x;
    }

    function findSet(x){
        if(x != x.parent){
            x.parent = findSet(x.parent);
        }
        return x.parent;
    }

    function union(x, y){
        let xUnion = findSet(x);
        let yUnion = findSet(y);
        if(xUnion !== yUnion){
            xUnion.parent = yUnion;
            count--;
        }
    }
};