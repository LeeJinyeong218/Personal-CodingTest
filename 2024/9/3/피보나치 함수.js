const input = require('fs').readFileSync("dev/stdin").toString().trim().split("\n").map(Number).slice(1);

let arr = new Array(41).fill([]);
arr[0] = [1, 0];
arr[1] = [0, 1];

for (let i = 2; i < 41; i++) {
    let count0 = arr[i - 1][0] + arr[i - 2][0];
    let count1 = arr[i - 1][1] + arr[i - 2][1];

    arr[i] = [count0, count1];
}

input.forEach(num => {
    console.log(
        arr[num].join(" ")
    )
})