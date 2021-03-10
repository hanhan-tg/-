// https://leetcode-cn.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	// 思路1：
	let head = null;
    let tail = null;
    let flag = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + flag;
        if(!head){
            head = tail = new ListNode(sum % 10);
        }else{
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        flag = Math.floor(sum / 10);
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(flag > 0){
        tail.next = new ListNode(flag);
    }
    return head;

  // USELESS
  // 递归
  // 必须用在字符串内相加得到结果，不然当数组元素过大，就会越界，全程不能用数字操作，只能在某个位数进行数字的算法操作
  // const arr1 = generateArray(l1);
  // const arr2 = generateArray(l2);
  // const maxLen = arr1.length > arr2.length ? arr1.length : arr2.length;
  // const resArr = new Array(maxLen).fill(0);
  // let flag = 0;
  // for(let i = 0; i < maxLen; i++){
  //     if(arr1[i]) resArr[i] += arr1[i];
  //     if(arr2[i]) resArr[i] += arr2[i];
  //     resArr[i] += flag;
  //     flag = Math.floor(resArr[i] / 10);
  // }
  // // 已经生成结果所对应的数组了
  // // 生成链表内值对应的数组
  // function generateArray(node){
  //     const arr = [];
  //     while(node){
  //         arr.push(node.val);
  //     }
  //     return arr;
  // }
};
var addTwoNumbers = function (l1, l2) {
	// 思路二：
	// 		两个链表同时变，每走一步，计算好两者之和+前一个进位的值再%10，重新赋给两个结点，然后往后走。不创建新的链表
	// 		设置一个尾结点来处理特殊情况也就是下面1.1
	// 两种情况：
	// 		1. 两者同时结束，也就是两个链表同时没有next(两链表长度相等)，
	// 			1.1 有进位：随便找一个链表，走到尾结点，new一个结点作为其next，进位作为值即可
	// 			1.2 无进位：直接返回任意一个链表
	// 		2. 两者不同时结束，也就是一个的next为null而另一个可以还有next(两者长度不等)
	// 			2.1 有进位：长的链表按同样的思路走，只是少加一个值，到最后结点时，如果flag有值，则new一个结点作为其next，值为flag
	// 			2.2	无进位：直接返回长的头结点即可
	
	// 保留两者头结点
	const head1 = l1; 
	const head2 = l2;
	let tail = l1; // 留着处理两者相同长度的问题
    let flag = 0;
    while (l1 && l2) {
        const sum = l1.val + l2.val + flag;
        flag = Math.floor(sum / 10);
        l1.val = sum % 10;
        l2.val = l1.val;
        l1 = l1.next;
        l2 = l2.next;
    }
    if(!l1 && !l2 && flag){
		// let node = head1;
        // while(node.next){
		//     node = node.next;
		// }
		// node.next = new ListNode(flag);
		// 优化
		tail.next = new ListNode(flag)
        return head1;
    }
    if (l1) {
        addRest(l1)
        return head1;
    } else {
        addRest(l2);
        return head2;
    }
    function addRest(node) {
        while (node) {
            const sum = node.val + flag;
            flag = Math.floor(sum / 10)
            node.val = sum % 10;
            if (!node.next && flag) {
                node.next = new ListNode(flag);
                break;
                console.log(head1, node)
            }
            node = node.next;
        }
    }
};