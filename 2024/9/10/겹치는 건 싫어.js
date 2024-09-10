const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const [n, k] = input[0].trim().split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

// 같은 정수를 K개 이하로 포함한 최장 연속 부분 수열의 길이

let count = Array(200001).fill(0);

let start = 0;
let end = n - 1;

for (let i = 0; i < n; i++) {
    if (count[arr[i]] >= k) {
        end = i - 1;
        break;
    }
    count[arr[i]]++;
}

let max = end - start + 1;

while (start < n) {
    count[arr[start]]--;
    start++;

    while (end < n && count[arr[end + 1]] < k) {
        end++;
        count[arr[end]]++;
    }

    max = Math.max(max, end - start + 1);
}

console.log(max);