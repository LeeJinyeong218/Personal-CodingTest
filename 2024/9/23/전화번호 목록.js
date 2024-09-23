function solution(phone_book) {
    let set = new Set(phone_book);
    
    for (let p of phone_book) {
        for (let i = 1; i < p.length; i++) {
            if (set.has(p.substr(0, i))) return false;
        }
    }
    return true;
}