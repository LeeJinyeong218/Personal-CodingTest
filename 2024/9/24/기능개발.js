function solution(progresses, speeds) {
    const days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    let idx = 0;
    let answer = [];
    for (let i = 0; i < days.length; i++) {
        if (days[i] > days[idx]) {
            answer.push(i - idx);
            idx = i;
        }
    }
    answer.push(days.length - idx);
    return answer;
}