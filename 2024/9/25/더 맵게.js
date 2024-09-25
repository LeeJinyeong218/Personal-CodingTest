class MinHeap {
    constructor(arr) {
        this.heap = []
        
        arr.forEach(num => {
            this.push(num);
        })
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    push(val) {
        this.heap.push(val);
        
        let i = this.heap.length - 1;
        let p = Math.floor((i - 1) / 2);
        
        while (this.heap[p] && this.heap[p] > this.heap[i]) {
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
        
        while (this.heap[l] && this.heap[l] < this.heap[i]
              || this.heap[r] && this.heap[r] < this.heap[i]) {
            let min = l;
            if (this.heap[r] < this.heap[l]) min = r;
            
            this.swap(i, min);
            
            i = min;
            l = 2 * i + 1;
            r = 2 * i + 2;
        }
        
        return ret;
    }
}

function solution(scoville, K) {
    let h = new MinHeap(scoville);
    let count = 0;
    while (true) {
        const [p1, p2] = [h.pop(), h.pop()];
        if (p1 >= K) return count;
        if (p2 === undefined) return -1;
        
        h.push(p1 + p2 * 2);
        count++;
    }
    return -1;
}