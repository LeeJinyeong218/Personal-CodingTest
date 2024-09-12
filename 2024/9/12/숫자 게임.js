class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        
        let i = this.heap.length - 1;
        let p = Math.floor((i - 1) / 2);
        
        while (this.heap[p] && this.heap[p] < this.heap[i]) {
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
            
            i = p;
            p = Math.floor((i - 1) / 2);
        }   
    } 
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        let ret = this.heap[0];
        this.heap[0] = this.heap.pop();
        
        let i = 0;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        
        while (this.heap[l] && this.heap[l] > this.heap[i]
              || this.heap[r] && this.heap[r] > this.heap[i]) {
            let max = l;
            if (this.heap[r] > this.heap[l]) max = r;
            
            [this.heap[max], this.heap[i]] = [this.heap[i], this.heap[max]];
            
            i = max;
            l = 2 * i + 1;
            r = 2 * i + 2;
        }
        
        return ret;
    }
}

function solution(A, B) {
    let hA = new MaxHeap();
    let hB = new MaxHeap();
    
    for (let i = 0; i < A.length; i++) {
        hA.push(A[i]);
        hB.push(B[i]);
    }

    let score = 0;
    
    while (hA.heap.length > 0) {
        let curA = hA.pop();
        let curB = hB.pop();
        while (curB <= curA) {
            curA = hA.pop();
        }
        if (curA !== null) {
            score++;    
        }
    }
    
    return score;
}