// https://leetcode-cn.com/problems/lru-cache/

// 思路
// 要想实现时间复杂度为O(1)，不能用数组，只能用链表，且是双向链表，才能保证是O(1)
// map中存储的是key对应的链表的节点，而链表中存储了value，这样就很方便的存储了
// 链表末尾是使用次数最少的，链表头是最新的
// 所以有以下几种情况：
//      1. map没满，直接将新的节点加到链表头上
//      2. map满了
//          2.1 新的节点在map中存在，直接将该节点放到链表头即可
//          2.2 新的节点不在map中，将将最后一个链表移除，同时该节点添加在链表头
// 查找的时候直接根据map中key对应的node.value就可以了，或者找不到返回-1

// 注：dummyTail.pre一直指向链表最后一个节点，可画图
//     头尾都用一个虚拟节点，可快速获取头尾节点

var DoubleLinkedListNode = function (key, value){
    this.key = key;
    this.value = value;
    this.next = null;
    this.pre = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = {};

    this.dummyHead = new DoubleLinkedListNode(null, null);
    this.dummyTail = new DoubleLinkedListNode(null, null);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.pre = this.dummyHead;

    this.isFull = function() {
        return Object.keys(this.map).length == this.capacity;
    }
    this.addToHead = function(node){
        const head = this.dummyHead.next;
        node.next = head;
        head.pre = node;
        node.pre = this.dummyHead;
        this.dummyHead.next = node;
    }
    this.removeNode = function(node){
        node.pre.next = node.next;
        node.next.pre = node.pre;
        node.pre = null;
        node.next = null;
        return node;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(key in this.map){
        const node = this.map[key]
        this.addToHead(this.removeNode(node));
        return node.value;
    }else{
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(key in this.map){
        const node = this.map[key];
        node.value = value;
        this.addToHead(this.removeNode(node));
    }else{ 
        if(this.isFull()){
            const node = this.dummyTail.pre;
            delete this.map[node.key];
            this.removeNode(node);
        }
        const node = new DoubleLinkedListNode(key ,value);
        this.map[key] = node;
        this.addToHead(node);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */