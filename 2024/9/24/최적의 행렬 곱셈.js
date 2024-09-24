function solution(matrix_sizes) {
    let nums = [matrix_sizes[0][0], ...matrix_sizes.map(i => i[1])];
    const n = nums.length;
    let dp = Array.from(Array(n), () => Array(n).fill(Infinity));
    
    // i == j인 경우는 곱셈이 필요 없으므로 0으로 초기화
    for (let i = 0; i < n; i++) {
        dp[i][i] = 0;
    }
    
    // 길이가 2 이상인 부분 행렬에 대해 최소 곱셈 횟수 계산
    for (let len = 1; len < n - 1; len++) {
        for (let i = 1; i < n - len; i++) {
            let j = i + len;
            for (let k = i; k < j; k++) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i][k] + dp[k + 1][j] + nums[i - 1] * nums[k] * nums[j]
                );
            }
        }
    }

    return dp[1][n - 1]; // 최종 최소 곱셈 횟수 반환
}
