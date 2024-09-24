function solution(priorities, location) {
    const n = priorities.length;
    let q = new Array(n).fill().map((_, i) => i);
    let rank = [];
    
    while (q.length > 0) {
        const max = Math.max(...q.map(i => priorities[i]));
        let cur = q.shift();
        if (priorities[cur] === max) {
            if (cur === location) return rank.length + 1;
            rank.push(cur);
            continue;
        } else {
            q.push(cur);
        }
    }
}