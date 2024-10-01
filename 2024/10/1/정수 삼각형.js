function solution(triangle) {
    const n = triangle.length;
    let dp = triangle.map(i => [...i]);
    
    for (let i = n - 2; i > -1; i--) {
        for (let j = 0; j <= i; j++) {
            dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }
    
    return dp[0][0];
}