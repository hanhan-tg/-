// https://leetcode-cn.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 硬算
    // 用hash存储出现的字符
    // 三循环比较，字符串 + 字符内部
    // 时间O(n^3) 空间O(n^2)

    //排序

    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());

};