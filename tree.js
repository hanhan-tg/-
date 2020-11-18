function Tree(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Tree('a');
var b = new Tree('b');
var c = new Tree('c');
var d = new Tree('d');
var e = new Tree('e');
var f = new Tree('f');
var g = new Tree('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// 前序遍历
function pre(root){
    if(root == null) return;
    console.log(root.value);
    pre(root.left);
    pre(root.right);
}
// 中序遍历
function mid(root){
    if(root == null) return;
    mid(root.left);
    console.log(root.value);
    mid(root.right);
}
// 后序遍历
function post(root){
    if(root == null) return;
    post(root.left);
    post(root.right);
    console.log(root.value);
}

// pre(a);
// mid(a);
// post(a);


// 已知前序中序遍历还原二叉树
(function(){
    var qian = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];
    var zhong = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];
    function f1(qian, zhong){
        if(qian == null || zhong == null || qian.length == 0 || zhong.length == null || qian.length != zhong.length) return null;
        var root = new Tree(qian[0]);
    
        var index = zhong.indexOf(root.value); // 找到根节点在中序遍历中的位置
    
        var leftQian = qian.slice(1, index + 1);// 前序遍历的左子树
        var rightQian = qian.slice(index + 1, qian.length);//前序遍历的右子树
        var leftZhong = zhong.slice(0, index); // 中序遍历的左子树
        var rightZhong = zhong.slice(index + 1, zhong.length); // 中序遍历的右子树

        root.left = f1(leftQian, leftZhong);// 根据左子树的前序和中序还原左子树
        root.right = f1(rightQian, rightZhong);// 根据右子树的前序和中序还原右子树
        return root;
    }
    var root = f1(qian, zhong);
    // console.log(root);
}());

// 已知中序后序遍历还原二叉树
(function(){
    var zhong = ['d' ,'b' ,'e' ,'a' ,'f' ,'c' ,'g'];
    var hou = ['d' ,'e' ,'b' ,'f' ,'g' ,'c' ,'a'];
    function f1(zhong, hou){
        if(zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length != hou.length) return;
        var root = new Tree(hou[hou.length - 1]);
        var index = zhong.indexOf(root.value);

        var leftHou = hou.slice(0, index);
        var rightHou = hou.slice(index, hou.length-1);
        var leftZhong = zhong.slice(0, index); 
        var rightZhong = zhong.slice(index + 1, zhong.length); 

        root.left = f1(leftZhong, leftHou);
        root.right = f1(rightZhong, rightHou);
        return root;
    }
    var root = f1(zhong, hou);
    // console.log(root);
}());

// 深度优先搜索
(function(){
    function deepSearch(root, target){
        if(root == null ) return false;
        if(root.value == target) return true;
        return deepSearch(root.left, target) || deepSearch(root.right, target);
    }
    // console.log(deepSearch(a, 'q'));
}());

// 广度优先搜索
(function(){
    // 不用递归的方式, 将所有的节点都以一维数组的方式存放
    function breadthSearch(rootList, target){
        if( rootList == null || rootList.length == 0) return;
        for(var i = 0 ; i < rootList.length ; i++){
            if(rootList[i].value == target) return true;
            if(rootList[i].left) rootList.push(rootList[i].left);
            if(rootList[i].right) rootList.push(rootList[i].right);
        }
        console.log(rootList);
        return false;
    }
    // 利用递归，每次childList中存放一层的全部节点
    function breadthSearch2(rootList, target){
        if( rootList == null || rootList.length == 0) return;
        var childList = [];
        for(var i = 0 ; i < rootList.length ; i++){
            if(rootList[i] != null && rootList[i].value == target) {
                return true;
            } else{
                childList.push(rootList[i].left);
                childList.push(rootList[i].right);
            }
        }
        // console.log(childList);
        rootList.push(...childList);
        return breadthSearch2(childList, target);
    }
    // 两种方法时间开销差不多
    // console.log(breadthSearch2([a], 'g'));
}());

// 二叉树比较问题
// 遇到二叉树比较问题，必须要确认，左右两颗子树如果交换位置，即左右互换还算不算是同一颗二叉树
// 面试尽量要问清楚，笔试的话，没有特殊说明左右互换还是同一棵树，那么默认互换后不是同一棵树
(function(){
    var a1 = new Tree('a');
    var b1 = new Tree('b');
    var c1 = new Tree('c');
    var d1 = new Tree('d');
    var e1 = new Tree('e');
    var f1 = new Tree('f');
    var g1 = new Tree('g');

    a1.left = b1;
    a1.right = c1;
    b1.left = d1;
    b1.right = e1;
    c1.left = f1;
    c1.right = g1;

    var a2 = new Tree('a');
    var b2 = new Tree('b');
    var c2 = new Tree('c');
    var d2 = new Tree('d');
    var e2 = new Tree('e');
    var f2 = new Tree('f');
    var g2 = new Tree('g');

    a2.left = b2;
    a2.right = c2;
    b2.left = d2;
    b2.right = e2;
    c2.left = f2;
    c2.right = g2;
    function compareTree(root1, root2){
        if(root1 == root2) return true;
        if(root1 == null && root2 != null || root1 != null && root2 == null) return false;
        if(root1.value != root2.value) return false;
        var fen = compareTree(root1.left, root2.left) && compareTree(root1.right, root2.right); // 左右子树分清楚,不可互换
        var bufen = compareTree(root1.left, root2.right) && compareTree(root1.right, root2.left); // 左右子树不分，可互换
        // return fen; // 左右子树不可互换
        return  fen || bufen;//左右子树可以互换
    }
    // console.log(compareTree(a1, a2));
}());

// 二叉树的diff算法，找出二叉树上新增的、删除的、修改的节点
(function(){
    var a1 = new Tree('a'),
        b1 = new Tree('b'),
        c1 = new Tree('c'),
        d1 = new Tree('d'),
        e1 = new Tree('e'),
        f1 = new Tree('f'),
        g1 = new Tree('g');

    a1.left = b1;
    a1.right = c1;
    b1.left = d1;
    b1.right = e1;
    c1.left = f1;
    c1.right = g1;

    var a2 = new Tree('a'),
        b2 = new Tree('b'),
        c2 = new Tree('c'),
        d2 = new Tree('d'),
        e2 = new Tree('e'),
        f2 = new Tree('f'),
        g2 = new Tree('g');

    a2.left = b2;
    a2.right = c2;
    b2.left = d2;
    b2.right = e2;
    c2.left = f2;
    // c2.right = g2;
    f2.left = g2;
    function diff(root1, root2, diffList){
        if(root1 == root2) return diffList;
        if(root1 == null && root2 != null){
            diffList.push({type: '新增', origin: null, now: root2});
        } else if(root1 != null && root2 == null){
            diffList.push({type: '删除', origin: root1, now: null});
        } else if(root1.value != root2.value){
            diffList.push({type: '修改', origin: root1, now: root2});
            diff(root1.left, root2.left, diffList);
            diff(root1.right, root2.right, diffList);
        } else{ // 最后一种只有值相同，继续往下走，继续判断
            diff(root1.left, root2.left, diffList);
            diff(root1.right, root2.right, diffList);
        }
    }
    var diffList = [];
    diff(a1, a2, diffList);
    // console.log(diffList);
}());



// prim算法， 加点法
(function(){
    const MAX = 1000000;
    var pointSet = [
        new Node('A'),
        new Node('B'),
        new Node('C'),
        new Node('D'),
        new Node('E')
    ];

    var distance = [
        [0, 4, 7, MAX, MAX],
        [4, 0, 8, 6, MAX],
        [7, 8, 0, 5, MAX],
        [MAX, 6, 5, 0, 7],
        [MAX, MAX, MAX, 7, 0]
    ];

    function Node(value){
        this.value = value;
        this.neighbor = [];
    }
    function getIndex(str){
        for(var i = 0; i < pointSet.length; i++){
            if(pointSet[i].value == str) return i;
        }
        return -1;
    }
    function getMinDisPoint(pointSet, distance, nowPointSet){
        var fromPoint = null;
        var minDisPoint = null;
        var minDis = MAX;
        for(var i = 0 ; i < nowPointSet.length; i++){
            var pointIndex = getIndex(nowPointSet[i].value);
            for(var j = 0; j < pointSet.length ; j++){
                var thisNode = pointSet[j]; //保留当前点
                if (distance[pointIndex][j] < minDis && nowPointSet.indexOf(thisNode) < 0){
                    // 保证当前点不在nowPointSet中，不然会产生无效循环
                    fromPoint = nowPointSet[i];
                    minDisPoint = thisNode; 
                    minDis = distance[pointIndex][j];
                }
            }
        }
        fromPoint.neighbor.push(minDisPoint);// 直接修改pointSet中的点的数据
        minDisPoint.neighbor.push(fromPoint);
        return minDisPoint;
    }
    function prim(pointSet, distance, start){
        var nowPointSet = [start];
        while(true){
            var minDisPoint = getMinDisPoint(pointSet, distance, nowPointSet);
            nowPointSet.push(minDisPoint);
            if(nowPointSet.length == pointSet.length) break;
        }
    }

    prim(pointSet, distance, pointSet[2]);
    // console.log(pointSet);
})();

// kruskal算法， 加边法
(function(){
    const MAX = 1000000;
    var pointSet = [
        new Node('A'),
        new Node('B'),
        new Node('C'),
        new Node('D'),
        new Node('E')
    ];
    var distance = [
        [0, 4, 7, MAX, MAX],
        [4, 0, 8, 6, MAX],
        [7, 8, 0, 5, MAX],
        [MAX, 6, 5, 0, 7],
        [MAX, MAX, MAX, 7, 0]
    ];

    function Node(value){
        this.value = value;
        this.neighbor = [];
    }
    
    function canLink(resultList, tempBegin, tempEnd){
        var beginIn = null; // begin所在的部落
        var endIn = null;   // end所在的部落
        for(var i = 0 ; i < resultList.length ; i++){
            if(resultList[i].indexOf(tempBegin) > -1){
                beginIn = resultList[i];
            }
            if(resultList[i].indexOf(tempEnd) > -1){
                endIn = resultList[i];
            }
        }
        
        if(beginIn != null && endIn != null && beginIn == endIn){
            return false;
        }
        return true;
       
    }
    function link(resultList, tempBegin, tempEnd){
        var beginIn = null; // begin所在的部落
        var endIn = null; // end所在的部落

        for(var i = 0 ; i < resultList.length ; i++){
            if(resultList[i].indexOf(tempBegin) > -1){
                beginIn = resultList[i];
            }
            if(resultList[i].indexOf(tempEnd) > -1){
                endIn = resultList[i];
            }
        }
        // 处理部落
        if( beginIn == null && endIn == null){// if beginIn和endIn都为null，即都没有部落
            var arr = [];
            arr.push(tempBegin,tempEnd);
            resultList.push(arr);
        }else if(beginIn!=null && endIn == null){// if beginIn!=null && endIn == null
            beginIn.push(tempEnd);
        }else if(beginIn == null && endIn != null){// if beginIn == null && endIn != null
            endIn.push(tempBegin);
        }else if(beginIn!=null && endIn != null && beginIn != endIn){// if beginIn!=null && endIn != null && beginIn != endIn
            var allIn = beginIn.concat(endIn);
            var needRemove = resultList.indexOf(endIn);
            resultList.splice(needRemove, 1);
            needRemove = resultList.indexOf(beginIn);
            resultList.splice(needRemove, 1);
            resultList.push(allIn);
        }
        tempBegin.neighbor.push(tempEnd);
        tempEnd.neighbor.push(tempBegin);
    }
    function kruskal(pointSet, distance){
        var resultList = []; // 二维数组，存储部落
        while(true){
            var begin = null;
            var end = null;
            var dis = MAX;
            for(var i = 0; i < distance.length; i++){
                for(j = 0; j < distance[i].length; j++){
                    var tempBegin = pointSet[i];
                    var tempEnd = pointSet[j];
                    if(distance[i][j] < dis && tempBegin != tempEnd && canLink(resultList, tempBegin, tempEnd) && i != j){
                        begin = tempBegin;
                        end = tempEnd;
                        dis = distance[i][j];
                    }
                }
            }
            link(resultList, begin, end);
            if(resultList.length == 1 && resultList[0].length == pointSet.length) break ;
        }
    }
    kruskal(pointSet, distance);
    // console.log(pointSet);
})();

// 二叉搜索树，比当前节点小的放左边，大的放右边，有排序的效果
(function(){
    var arr = [];
    for (var i = 0 ; i < 10000 ; i ++) {
        arr[i] = Math.floor(Math.random() * 10000);
    }
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    var num = 0;
    function search(arr, target) {
        for (var i = 0 ; i < arr.length ; i ++) {
            num += 1;
            if (arr[i] == target) return true;
        }
        return false;
    }
    function addNode(root, num) {
        if (root == null) return;
        if (root.value == num) return;
        if (root.value < num) {//目标值比当前节点大
            if (root.right == null) root.right = new Node(num);//如果右侧为空，则创建节点
            else addNode(root.right, num);//如果右侧不为空，则向右侧进行递归
        } else {//目标值比当前节点小
            if (root.left == null) root.left = new Node(num);
            else addNode(root.left, num);
        }
    }
    function buildSearchTree(arr) {
        if (arr == null || arr.length == 0) return null;
        var root = new Node(arr[0]);
        for (var i = 1 ; i < arr.length ; i ++) {
            addNode(root, arr[i]);
        }
        return root;
    }
    var num2 = 0;
    function searchByTree(root, target){
        if(root == null) return false;
        num2++;
        if(root.value == target) return true;
        if(root.value < target) return searchByTree(root.right, target);
        else return searchByTree(root.left, target);
    }
    // console.log(search(arr, 1000)); 
    // console.log(num);
    // var root = buildSearchTree(arr);
    // // console.log(root);
    // console.log(searchByTree(root, 1000));
    // console.log(num2);
})();

// 平衡二叉树， 节点的左右子节点深度差不超过1
(function (){
    var a = new Tree("a");
    var b = new Tree("b");
    var c = new Tree("c");
    var d = new Tree("d");
    var e = new Tree("e");
    var f = new Tree("f");
    var g = new Tree("g");
    var h = new Tree("h");
    var j = new Tree("j");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;
    d.right = h;
    e.right = j;

    function getDepth(root){
        if(root == null) return 0;
        return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
    }
    function isBalance(root){
        if(root == null) return true;
        if(Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;
        else return isBalance(root.left) && isBalance(root.right); // 除了自己的左右节点深度不超过1外，要对自己的左右节点也判断是否符合条件
    }
    // console.log(getDepth(b));
    // console.log(isBalance(a));
})();


// 二叉树的单旋。 将不平衡二叉树变为平衡二叉树
(function (){
    var node1 = new Tree("1");
    var node2 = new Tree("2");
    var node3 = new Tree("3");
    var node4 = new Tree("4");

    node1.right = node3;
    node3.left = node2;
    node3.right = node4;

    function getDepth(root){
        if(root == null) return 0;
        return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
    }
    function isBalance(root){
        if(root == null) return true;
        if(Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;
        else return isBalance(root.left) && isBalance(root.right); 
    }
    function leftRotate(root){
        // 1.找到新根
        var newRoot = root.right;
        // 2.找到变化分支
        var changeRoot = root.right.left;
        // 3.当前旋转节点的右孩子为变化分支
        root.right = changeRoot;
        // 4.新根的左孩子为旋转节点
        newRoot.left = root;
        // 5.返回新的根节点
        return newRoot;
    }
    function rightRotate(root){
        // 1.找到新根
        var newRoot = root.left;
        // 2.找到变化分支
        var changeRoot = root.left.right;
        // 3.当前旋转节点的右孩子为变化分支
        root.left = changeRoot;
        // 4.新根的右孩子为旋转节点
        newRoot.right = root;
        // 5.返回新的根节点
        return newRoot;
        
    }
    function change(root){ //将不平衡二叉树变为平衡二叉树
        if(isBalance(root)) return ;
        if(root.left != null) root.left = change(root.left);
        if(root.right != null) root.right = change(root.right);
        var leftDepth = getDepth(root.left);
        var rightDepth = getDepth(root.right);
        if(Math.abs(leftDepth - rightDepth) < 2){
            return true;
        }else if(leftDepth > rightDepth){// 说明不平衡，左边深，要右旋
            return rightRotate(root);
        }else{ // 说明右边深，要左旋
            return leftRotate(root);
        }
    }
    // console.log(isBalance(node1));
    // var newRoot = change(node1);
    // // console.log(change(node1));
    // console.log(isBalance(node1));
    // console.log(node1)
})();


// 树的深度优先搜索
(function(){
    function Node(value){
        this.value = value;
        this.children = [];
    }
    var a = new Node('a');
    var b = new Node('b');
    var c = new Node('c');
    var d = new Node('d');
    var e = new Node('e');
    var f = new Node('f');
    a.children.push(b, c, d);
    d.children.push(e, f);

    function deepSearch(root ,target){
        if(root == null) return false;
        if(root.value == target) return true;
        var result = false;
        for(var i = 0 ; i < root.children.length; i++){
            result |= deepSearch(root.children[i], target); // 或等于，只要有一个是真就行
        }
        return result ? true : false;
    }
    // console.log(deepSearch(a, 'f'));
})();

// 树的广度优先搜索
(function(){
    function Node(value){
        this.value = value;
        this.children = [];
    }
    var a = new Node('a');
    var b = new Node('b');
    var c = new Node('c');
    var d = new Node('d');
    var e = new Node('e');
    var f = new Node('f');
    a.children.push(b, c, d);
    d.children.push(e, f);

    // 非递归处理
    function breadthSearch(roots, target){
        if(roots == null || roots.length == 0) return false;
        for(var i = 0 ; i < roots.length; i++){
            if(roots[i].value == target) return true;
            roots = roots.concat(roots[i].children);
        }
        return false;
    }
    // 递归处理
    function breadthSearch2(roots, target){
        if(roots == null || roots.length == 0) return false;
        var children = [];
        for(var i = 0 ; i < roots.length; i++){
            if(roots[i].value == target){
                return true;
            } else{
                children = children.concat(roots[i].children);
            }
        }
        return breadthSearch2(children, target);
    }
    // console.log(breadthSearch([a], 'f'));
})();

// 图的深度优先搜索
(function(){
    function Node(value){
        this.value = value;
        this.neighbor = [];
    }
    var a = new Node('a');
    var b = new Node('b');
    var c = new Node('c');
    var d = new Node('d');
    var e = new Node('e');
    
    a.neighbor.push(b, c);
    b.neighbor.push(a, c, d);
    c.neighbor.push(a, b, d);
    d.neighbor.push(b, c, e);
    e.neighbor.push(d);

    function deepSearch(node, target, path){ // path用来处理形成环的情况
        if(node == null) return false;
        if(path.indexOf(node) > -1) return false;
        if(node.value == target) return true;
        var result = false;
        path.push(node);
        for(var i = 0; i< node.neighbor.length; i++){
           result |= deepSearch(node.neighbor[i], target, path);
        }
        return result ? true : false;
    }
    // console.log(deepSearch(b, 'e', []));
})();


// 图的广度优先搜索
(function(){
    function Node(value){
        this.value = value;
        this.neighbor = [];
    }
    var a = new Node('a');
    var b = new Node('b');
    var c = new Node('c');
    var d = new Node('d');
    var e = new Node('e');
    
    a.neighbor.push(b, c);
    b.neighbor.push(a, c, d);
    c.neighbor.push(a, b, d);
    d.neighbor.push(b, c, e);
    e.neighbor.push(d);

    // 不利用递归
    function breadthSearch(nodes, target, path){
        if(nodes == null || nodes.length == 0) return false;
        for(var i = 0 ; i < nodes.length ; i++){
            if(path.indexOf(nodes[i]) > -1) continue;
            path.push(nodes[i]);
            if(nodes[i].value == target) {
                return true;
            } else {
                nodes = nodes.concat(nodes[i].neighbor);
            }
        }
        return false;
    }
    // 利用递归
    function breadthSearch2(nodes, target, path){
        if(nodes == null || nodes.length == 0) return false;
        var children = [];
        for(var i = 0 ; i < nodes.length ; i++){
            if(path.indexOf(nodes[i]) > -1) continue;
            path.push(nodes[i]);
            if(nodes[i].value == target) return true;
            else children = children.concat(nodes[i].neighbor);
        }
        return breadthSearch(children, target , path);
    }
    console.log(breadthSearch([a], 'd', []));
})();

