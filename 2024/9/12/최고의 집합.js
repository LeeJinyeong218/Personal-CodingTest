function solution(n, s) {
    if (n > s) {
        return [-1];
    }
    
    let std = Math.floor(s / n);
    let rest = s - n * std;
    
    let ret = new Array(n).fill(std);
    
    if (rest > 0) {
        for (let i = n - 1; i > -1; i--) {
            if (rest > 0) {
                ret[i]++;
                rest--;
            } else break;
        }
    }
    
    return ret; 
}