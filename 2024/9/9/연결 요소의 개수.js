const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const [n, m] = input[0].trim().split(" ").map(Number);
const uvs = input.slice(1).map(i => i.trim().split(" ").map(i => +i - 1));

let edge = Array.from(Array(n), () => Array(n).fill(false));
let visited = Array(n).fill(false);

uvs.forEach(([u, v]) => {
    edge[u][v] = true;
    edge[v][u] = true;
})

let count = 0;

for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let q = [i];
    visited[i] = true;
    count++;

    while (q.length > 0) {
        let cur = q.shift();

        for (let j = 0; j < n; j++) {
            if (edge[cur][j] && !visited[j]) {
                visited[j] = true;
                q.push(j);
            }
        }
    }
}

console.log(count);
