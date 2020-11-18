// 链表的建立
function Node(value){
    this.value = value;
    this.next = null;
}
// 双向链表
// 优点：给出一个节点，能遍历整个链表
// 缺点：多出一个引用
function DNode(value){
    this.value = value;
    this.next = null;
    this.pre = null;
}
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// 链表的递归遍历
function nodeLink(root){
    if(!root) return;//不能报错，错误情况处理
    console.log(root);
    nodeLink(root.next);
}
// nodeLink(node1);

// 链表的循环遍历
function nodeLoop(root){
    while(root){
        console.log(root.value);
        root = root.next;
    }
}
// nodeLoop(node1);

// 链表的逆置
function nodeReverse(root){
    if(root.next.next == null){
        root.next.next = root;
        return root.next; // 返回新的根节点
    } else{
        var result = nodeReverse(root.next); // 保留root.next指向的root.next.next
        root.next.next = root;
        root.next = null;
        return result;
    }
}
var node = nodeReverse(node1);
nodeLink(node);
// function nizhi(root){
//     if(root.next.next == null){
//         root.next.next = root;
//         return root.next;
//     } else {
//         var result = nizhi(root.next);
//         root.next.next = root;
//         root.next = null; // 不能少，递归到最后一个的时候防止继续递归
//         return result;
//     }
// }
// var node = nizhi(node1);
// nodeLink(node);

