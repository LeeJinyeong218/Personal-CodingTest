const input = require('fs').readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0].trim());
const pair = input.slice(2).map(i => i.trim().split(" ").map(Number));

const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(false));
pair.forEach(p => {
    graph[p[0]][p[1]] = true;
    graph[p[1]][p[0]] = true;
})

let q = [1];
let visited = new Array(n + 1).fill(false);
visited[1] = true;
let count = 0;

while (q.length > 0) {
    let cur = q.shift();

    for (let i = 1; i <= n; i++) {
        if (!visited[i] && graph[cur][i]) {
            visited[i] = true;
            count++;
            q.push(i);
        }
    }
}

console.log(count);

