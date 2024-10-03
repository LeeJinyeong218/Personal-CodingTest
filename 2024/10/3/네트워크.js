function solution(n, computers) {
    let visited = Array(n).fill(false);
    
    let q = [0];
    visited[0] = true;
    let count = 1;
    
    while (q.length > 0) {
        const cur = q.shift();
        
        for (let i = 0; i < n; i++) {
            if (computers[cur][i] && !visited[i]) {
                visited[i] = true;
                q.push(i);
            }
        }
        
        const idx = visited.findIndex(i => !i);
        if (q.length === 0 && idx > 0) {
            q.push(idx);
            visited[idx] = true;
            count++;
        }
    }
    
    return count;
}