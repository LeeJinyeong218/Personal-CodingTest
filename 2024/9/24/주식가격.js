function solution(prices) {
    const n = prices.length;
    let st = [];
    let answer = Array(n);

    for (let i = 0; i < n; i++) {
        while (st.length > 0 && prices[i] < prices[st[st.length - 1]]) {
            const sti = st.pop();
            answer[sti] = i - sti;
        }
        st.push(i);
    }
    
    while (st.length > 0) {
        const i = st.pop();
        answer[i] = n - i - 1;
    }
    
    return answer;
}