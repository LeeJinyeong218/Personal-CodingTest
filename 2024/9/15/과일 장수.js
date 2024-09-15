function solution(k, m, score) {
    let answer = 0;
    
    const box = Math.floor(score.length / m);
    let max = 0;
    let count = Array(k + 1).fill(0);
    score.forEach(s => {
        count[s]++;
        max = Math.max(s, max);
    })
    
    for (let b = 0; b < box; b++) {
        let min = max;
        for (let i = 0; i < m; i++) {
            while (count[max] === 0) {
                max--;
            }
            min = max;
            count[max]--;
        }
        
        answer += min * m;
    }
    
    return answer;
}