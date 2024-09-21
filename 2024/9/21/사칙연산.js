function solution(arr) {
    
    const n = arr.length;
    let maxDp = Array.from(Array(n), () => Array(n).fill(null));
    let minDp = Array.from(Array(n), () => Array(n).fill(null));
    
    for (let i = 0; i < n; i += 2) {
        maxDp[i][i] = +arr[i];
        minDp[i][i] = +arr[i];
    }
    
    for (let i = 2; i < n; i += 2) {
        for (let s = 0; s < n - i; s++) {
            const e = s + i;
            let max = Number.MIN_SAFE_INTEGER;
            let min = Number.MAX_SAFE_INTEGER;
            for (let op = s + 1; op < e; op += 2) {
                if (arr[op] === "+") {
                    max = Math.max(max, maxDp[s][op - 1] + maxDp[op + 1][e]);
                    min = Math.min(min, minDp[s][op - 1] + minDp[op + 1][e]);
                } else {
                    max = Math.max(max, maxDp[s][op - 1] - minDp[op + 1][e]);
                    min = Math.min(min, minDp[s][op - 1] - maxDp[op + 1][e]);
                }
            }
            maxDp[s][e] = max;
            minDp[s][e] = min;
            
        }
    }
    
    return maxDp[0][arr.length - 1];
}