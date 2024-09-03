const input = Number(require('fs').readFileSync("dev/stdin").toString().trim());

let arr = new Array(1001).fill(-1);
arr[1] = 1;
arr[2] = 2;

for (let i = 3; i <= input; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
}

console.log(arr[input]);

