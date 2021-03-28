// https://leetcode-cn.com/problems/restore-ip-addresses/

// 题解：https://leetcode-cn.com/problems/restore-ip-addresses/solution/shou-hua-tu-jie-huan-yuan-dfs-hui-su-de-xi-jie-by-/

var restoreIpAddresses = function (s) {
    // 回溯
    const res = [];
    const dfs = (subRes, start) => {
        if (subRes.length === 4 && start === s.length) {
            res.push(subRes.join('.'));
            return;
        }
        if (subRes.length === 4 && start < s.length) {
            return;
        }
        for(let len = 1; len <= 3; len++){ // 枚举出三种情况
            // 如果长度超过s，就剪枝
            if(start + len - 1 >= s.length) return;
            // 说明出现了0x 或0xx的情况
            if(len != 1 && s[start] == '0') return;

            substr = s.substring(start, start + len);
            if(len == 3 && +substr > 255) return;
            
            subRes.push(substr);
            dfs(subRes, start + len);
            subRes.pop();
        }
    }
    dfs([], 0);
    return res;
};