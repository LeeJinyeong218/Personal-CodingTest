class TrieNode {
    constructor() {
        this.children = new Map();
        this.count = 0;  // 접두어를 사용한 단어의 수
    }
}

class SearchBox {
    constructor(words) {
        this.root = new TrieNode();
        this.arr = words;
        
        // 각 단어를 Trie에 추가
        if (words) {
            words.forEach(w => {
                this.addWord(w);
            });
        }
    }
    
    // Trie에 단어를 추가하는 메서드
    addWord(word) {
        let node = this.root;
        
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode()); // 철자에 node 연결
            }
            
            node = node.children.get(char); // node를 철자로 이동
            node.count++; // 해당 node에 count++;
        }
    }
    
    // 특정 단어를 식별하는데 필요한 최소 입력 횟수를 계산
    getMinType(word) {
        let node = this.root;
        let inputCount = 0;
        
        // 철자 하나씩 접근하면서 inputCount++
        // node.count가 1이 되는 순간에 inputCount 반환
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            node = node.children.get(char);
            inputCount++;
            
            // 현재 접두어가 다른 단어와 겹치지 않으면 최소 입력 횟수를 반환
            if (node.count === 1) {
                return inputCount;
            }
        }
        
        return inputCount;  // 전체 단어를 다 입력해야 하는 경우
    }
    
    // 전체 단어에 대해 필요한 최소 입력 횟수의 합을 구함
    getSum() {
        let sum = 0;
        this.arr.forEach(word => {
            sum += this.getMinType(word);
        });
        return sum;
    }
}

function solution(words) {
    const sb = new SearchBox(words);
    return sb.getSum();
}
