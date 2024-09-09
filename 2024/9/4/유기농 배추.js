const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const t = +(input[0].trim());
let startIdx = 1;

const dr = [[-1, 0], [1, 0], [0, -1], [0, 1]];

for (let tcase = 0; tcase < t; tcase++) {
    const [m, n, k] = input[startIdx].trim().split(" ").map(Number);
    const locates = input.slice(startIdx + 1, startIdx + 1 + k).map(i => i.trim().split(" ").map(Number));

    let grid = Array.from(Array(n), () => Array(m).fill(false));
    
    locates.forEach(([c, r]) => {
        grid[r][c] = true;
    })
    
    // 영역 구하기
    let count = 0;

    for (let [c, r] of locates) {
        if (!grid[r][c]) continue;
        count++;
        let q = [[r, c]];

        while (q.length > 0) {
            let cur = q.shift();

            for (let d of dr) {
                const nr = cur[0] + d[0];
                const nc = cur[1] + d[1];
                
                if (nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc]) {
                    q.push([nr, nc]);
                    grid[nr][nc] = false;
                }
            }
        }
    }
    console.log(count);
    startIdx = startIdx + 1 + k;
}
