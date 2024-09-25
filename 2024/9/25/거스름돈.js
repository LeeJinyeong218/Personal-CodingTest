function solution(n, money) {
    money.sort((a, b) => a - b);
    let dp = Array(n + 1).fill(0);
    dp[0] = 1; // 동전 0개로 0을 만드는 방법은 1가지

    for (let m of money) {
        for (let num = m; num <= n; num++) {
            dp[num] += dp[num - m]; // 이전 상태를 이용해 중복 계산을 줄임
        }
    }

    return dp[n];
}
