function solution(n, stations, w) {
    let next_station = 0;
    let start = 1;
    let end;
    let answer = 0;
    const range = w * 2 + 1;
    
    while (start <= n) {
        if (stations[next_station] === undefined) {
            end = n;
        } else {
            end = stations[next_station] - w - 1;
        }
        
        answer += Math.ceil((end - start + 1) / range);
        start = stations[next_station] + w + 1;
        next_station++;
    }
    
    return answer;
}