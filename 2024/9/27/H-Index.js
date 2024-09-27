function solution(citations) {
    const n = citations.length;
    citations.sort((a, b) => a - b);
    
    for (let i = 0; i < n; i++) {
        const h = n - i;  // 남은 논문의 수
        if (citations[i] >= h) {
            return h;
        }
    }
    
    return 0;  // H-Index가 0일 경우
}