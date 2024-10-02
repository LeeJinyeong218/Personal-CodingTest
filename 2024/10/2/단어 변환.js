function solution(begin, target, words) {
    let q = [[begin, 0]];
    while (q.length > 0) {
        const [str, tries] = q.shift();
        
        if (str === target) return tries;
        if (tries > words.length) return 0;
        
        for (let word of words) {
            if (isSimilar(str, word)) q.push([word, tries + 1]);
        }
    }
}

const isSimilar = (str1, str2) => {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) count++;
        if (count > 1) return false;
    }
    return true;
}