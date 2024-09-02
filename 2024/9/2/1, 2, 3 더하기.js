const input = require('fs').readFileSync("dev/stdin").toString().trim();

const nums = input.split("\n").map(i => Number(i.trim())).slice(1);

let count = new Array(12).fill(-1);
count[0] = 0;
count[1] = 1;
count[2] = 2;
count[3] = 1 + count[2] + count[1];

for (let i = 4; i < 12; i++) {
    count[i] = count[i - 3] + count[i - 2] + count[i - 1];
}

nums.forEach(v => {
    console.log(count[v]);
})