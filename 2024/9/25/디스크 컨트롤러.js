class Heap {
    // 걸리는 시간 순으로 정렬
    constructor() {
        this.heap = [];
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }
    
    push(val) {
        this.heap.push(val);
        
        let i = this.heap.length - 1;
        let p = Math.floor((i - 1) / 2);
        
        while (this.heap[p] && this.heap[p][1] > this.heap[i][1]) {
            this.swap(i, p);
            
            i = p;
            p = Math.floor((i - 1) / 2);
        }
    }
    
    pop() {
        if (this.heap.length < 2) return this.heap.pop();
        
        let ret = this.heap[0];
        this.heap[0] = this.heap.pop();
        
        let i = 0;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        
        while (this.heap[l] && this.heap[l][1] < this.heap[i][1]
              || this.heap[r] && this.heap[r][1] < this.heap[i][1]) {
            let min = l;
            if (this.heap[r] && this.heap[r][1] < this.heap[l][1]) min = r;
            
            this.swap(min, i);
            i = min;
            l = 2 * i + 1;
            r = 2 * i + 2;
        }
        
        return ret;
    }
}

function solution(jobs) {
    const n = jobs.length;
    let jobQ = [...jobs.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else return a[1] - b[1];
    })];
    let t = 0;
    let h = new Heap();
    let sum = 0;
    while (jobQ.length > 0 || !h.isEmpty()) {
        if (!h.isEmpty()) {
            const [s, p] = h.pop();
            t += p;
            sum += t - s;
        } else {
            t = jobQ[0][0];
        }
        
        while (jobQ[0] && jobQ[0][0] <= t) {
            h.push(jobQ.shift());
        }
    }
    
    return Math.floor(sum / n);
}