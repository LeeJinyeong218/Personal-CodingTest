const input = require('fs').readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m, v] = input[0].trim().split(" ").map(Number);
const edges = input.slice(1).map(i => i.trim().split(" ").map(Number));

let graph = Array.from(new Array(n + 1), () => new Array(n + 1).fill(false));

edges.forEach(([s, e]) => {
    graph[s][e] = true;
    graph[e][s] = true;
})

let st = [v];
let q = [v];

let dfs = [];
let bfs = [];

let visited = Array(n + 1).fill(false);

while (st.length > 0) {
    let cur = st.pop();
    if (visited[cur]) continue;
    visited[cur] = true;
    dfs.push(cur);

    for (let i = n; i > -1; i--) {
        if (graph[cur][i] && !visited[i]) {
            st.push(i);
        }
    }
}

visited[v] = false;

while (q.length > 0) {
    let cur = q.shift();
    bfs.push(cur);

    for (let i = 1; i < n + 1; i++) {
        if (graph[cur][i] && visited[i]) {
            q.push(i);
            visited[i] = false;
        }
    }
}

console.log(dfs.join(" "));
console.log(bfs.join(" "));