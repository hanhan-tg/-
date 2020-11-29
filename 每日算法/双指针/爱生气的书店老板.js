// https://leetcode-cn.com/problems/grumpy-bookstore-owner/

var maxSatisfied = function(customers, grumpy, X) {
    // 双指针 滑动窗口
    // 窗口初始化为0 X-1，两个指针同步移动
    // 目的是求出在滑动窗口范围内，grumpy为1的位置在customers中的值之和的最大值，该值加上不生气时的值就为最大值
    let l = 0;
    let r = X - 1;
    let max = 0;
    while (r != customers.length) {
        let tempMax = 0;
        for (let i = l; i <= r; i++) {
            if (!grumpy[i]) continue;
            tempMax += customers[i];
        }
        if (tempMax > max) {
            max = tempMax;
        }
        l++;
        r++;
    }
    for (let i = 0; i < customers.length; i++) { // 求本来不发火时的总数
        max += grumpy[i] ? 0 : customers[i];
    }
    return max;
    // 时间复杂度：O(n*x)  n为数组长度，x为滑动窗口大小
    // 空间复杂度：O(1)

    // 方法二
    // 边走边算
    let result = 0;
    let max = 0;
    let temp = 0;
    let left = 0,
        right = 0

    while (right < customers.length) {
        // 记录未开技能时，客户的满意量
        result += grumpy[right] ? 0 : customers[right];
        // 记录区间内可补偿的最大值(老板生气时候的值)
        temp += grumpy[right] ? customers[right] : 0;

        if (right - left + 1 > X) {
            temp -= grumpy[left] ? customers[left] : 0;
            left++;
        }
        right++;
        max = Math.max(max, temp);
    }
    return result + max;
    // 时间复杂度：O(n)  n为数组长度
    // 空间复杂度：O(1)
};