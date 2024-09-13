class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
    }
    
    push(val) {
        this.heap.push(val);
        
        let i = this.heap.length - 1;
        let p = Math.floor((i - 1) / 2);
        
        while (this.heap[p] && this.heap[i] > this.heap[p]) {
            this.swap(i, p);
            
            i = p;
            p = Math.floor((i - 1) / 2);
        }
    }
    
    peekMax() {
        return this.heap[0];
    }
    
    peekMin() {
        let minIdx = Math.floor((this.heap.length - 2) / 2) + 1; // last nodes
        
        for (let i = minIdx; i < this.heap.length; i++) {
            if (this.heap[minIdx] > this.heap[i]) minIdx = i;
        }
        
        return this.heap[minIdx];
    }
    
    popMax() {
        if (this.heap.length < 2) return this.heap.pop();
        
        let ret = this.heap[0];
        this.heap[0] = this.heap.pop();
        
        let i = 0;
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        
        while (this.heap[l] && this.heap[l] > this.heap[i]
              || this.heap[r] && this.heap[r] > this.heap[i]) {
            let max = this.heap[r] > this.heap[l] ? r : l;
            
            this.swap(max, i);
            
            i = max;
            l = i * 2 + 1;
            r = i * 2 + 2;
        }
        
        return ret;
    }
    
    popMin() {
        if (this.heap.length < 2) return this.heap.pop();
        
        let start = Math.floor((this.heap.length - 2) / 2) + 1; // last nodes
        let minIdx = start;
        
        for (let i = start; i < this.heap.length; i++) {
            if (this.heap[minIdx] > this.heap[i]) minIdx = i;
        }
        
        this.swap(minIdx, this.heap.length - 1);
        let ret = this.heap.pop();
        
        let i = minIdx;
        let p = Math.floor((i - 1) / 2);
        
        while (this.heap[p] && this.heap[i] > this.heap[p]) {
            this.swap(i, p);
            
            i = p;
            p = Math.floor((i - 1) / 2);
        }
        
        return ret;
    }
}

function solution(operations) {
    let h = new MaxHeap();
    
    operations.forEach(op => {
        let [com, num] = op.split(" ");
        
        if (com === "I") {
            h.push(+num);
        } else {
            if (num === "-1") {
                h.popMin();
            } else {
                h.popMax();
            }
        }
    })
    
    if (h.heap.length > 0) {
        return [h.peekMax(), h.peekMin()];
    } else return [0, 0];
}