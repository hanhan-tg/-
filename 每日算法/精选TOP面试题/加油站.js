// https://leetcode-cn.com/problems/gas-station/


/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // 思路：从0开始，走到某个点i时停下了，说明从0是无法到达i+1的，那如果从i+1开始能到达0，那说明还是能走完的，
  // 因为走到0时>=0的油量
  const n = gas.length;
  let i = 0;
  while (i < n) {
      let sumOfCost = 0;// 需要的
      let sumOfGas = 0;// 有的
      let count = 0;// 记录走了几个站点
      while (count < n) {
          let j = (i + count) % n;
          sumOfCost += cost[j];
          sumOfGas += gas[j];
          if (sumOfCost > sumOfGas) {
              break;
          }
          count++;
      }
      if (count == n) {
          return i;
      } else {
          i = i + count + 1; // 假设count==0，说明当前i位置不能到达i+1，所以还是得+1
      }
  }
  return -1;
};