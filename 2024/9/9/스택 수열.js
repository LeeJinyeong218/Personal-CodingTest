const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const n = +(input[0].trim());
const nums = input.slice(1).map(i => +(i.trim()));

let answer = [];
let st = [];
let cur = 1;

for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (st.length > 0 && st[st.length - 1] === num) {
        st.pop();
        answer.push("-");
    } else if (cur <= num) {
        while (cur <= num) {
            st.push(cur);
            answer.push("+");
            cur++;
        }
        st.pop();
        answer.push("-");
    } else {
        console.log("NO");
        process.exit();
    }
}
console.log(answer.join("\n"));