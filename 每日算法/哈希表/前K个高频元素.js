// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
// https://leetcode-cn.com/problems/top-k-frequent-elements/
// 巨慢，巨垃圾
// var topKFrequent = function(nums, k) {
//     if(!k || !nums.length){
//         return [];
//     }
//     const hash = {};
//     let arr = [];
//     const res = [];
//     for(let i = 0 ; i < nums.length; i++){
//         if(hash[nums[i]]){
//             hash[nums[i]]++;
//         }else{
//             hash[nums[i]] = 1;
//         }
//     }
//     for(let ele in hash){
//         arr.push({ [ele]: hash[ele] });
//     }
//     arr.sort((a,b)=>Object.values(a)[0] - Object.values(b)[0])
//     arr = arr.map((ele)=>Object.keys(ele)[0])
//     for(let i = 0 ; i < k; i++){
//         res.push(arr.pop());
//     }
//     return res;
// };
var topKFrequent = function(nums, k) {
    const counts = {};
  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }
  // 只需要保留下来所有的key，因为value在counts中存了，所以要用value直接在counts中取，而不需要多存一个对象
  return [...new Set(nums)].sort((a, b) => counts[b] - counts[a]).slice(0, k);
};
// 时间复杂度: $O(N * logN)$, N 为数组长度
// 空间复杂度: $O(N)$, N 为数组长度