const input = Number(require('fs').readFileSync("dev/stdin").toString().trim());

let arr = new Array(input + 1);
arr[0] = 0;
arr[1] = 0;

for (let i = 2; i <= input; i++) {
    let min = arr[i - 1];
    if (i % 3 === 0) min = Math.min(arr[i / 3], min);
    if (i % 2 === 0) min = Math.min(arr[i / 2], min);

    arr[i] = min + 1;
}

console.log(arr[input]);
