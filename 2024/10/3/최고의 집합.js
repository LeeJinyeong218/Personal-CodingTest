function solution(n, s) {
    if (n > s) return [-1];
    if (n === s) return Array(n).fill(1);
    if (n === 1) return [s];
    
    if (!s % n) return Array(n).fill(s / n);
    else {
        const rest = s % n;
        const quo = Math.floor(s / n);
        return [...Array(n - rest).fill(quo), ...Array(rest).fill(quo + 1)];
    }
}