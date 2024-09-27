function solution(n, edge) {
    let graph = {};
    edge.forEach(([s, e]) => {
        if (graph[s] === undefined) graph[s] = [];
        if (graph[e] === undefined) graph[e] = [];
        
        graph[s].push(e);
        graph[e].push(s);
    })
    
    let path = Array(n + 1).fill(Infinity);
    let visited = Array(n + 1).fill(false);
    
    let q = [[1, 0]];
    visited[1] = true;
    let max = 0;
    let set = new Set();
    
    while (q.length > 0) {
        const [num, l] = q.shift();
        
        path[num] = Math.min(path[num], l);
        
        if (path[num] > max) {
            max = path[num];
            set = new Set([num]);
        } else if (path[num] === max) {
            set.add(num);
        }
        
        graph[num].forEach(v => {
            if (!visited[v]) {
                q.push([v, l + 1]);
                visited[v] = true;
            }
        })
    }

    return set.size; 
}