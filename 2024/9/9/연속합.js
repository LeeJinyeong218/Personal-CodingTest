const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const n = +(input[0].trim());
const nums = input[1].trim().split(" ").map(Number);

let sum = Array(n).fill(-1);
sum[0] = nums[0];
let max = nums[0];

for (let i = 1; i < n; i++) {
    sum[i] = Math.max(nums[i], sum[i - 1] + nums[i]);
    max = Math.max(sum[i], max);
}

console.log(max);