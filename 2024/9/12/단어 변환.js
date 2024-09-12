function solution(begin, target, words) {
    let q = [[begin, 0]];
    let visited = Array(words.length);
    
    while (q.length > 0) {
        let [cur_word, count] = q.shift();
        
        if (cur_word === target) {
            return count;
        }
        for (let i = 0; i < words.length; i++) {
            if (!visited[i]) {
                let next_word = words[i];
            
                let diff = getDiff(next_word, cur_word);

                if (diff === 1) {
                    q.push([next_word, count + 1]);
                    visited[i] = true;
                }
            }
        }
    }
    
    return 0;
}

const getDiff = (str1, str2) => {
    return  str1.split("").reduce((p, n, idx) => {
                return n === str2[idx] ? p : p + 1;
            }, 0);   
}