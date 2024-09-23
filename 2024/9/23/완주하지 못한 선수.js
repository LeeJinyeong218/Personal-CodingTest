function solution(participant, completion) {
    let map = new Map();
    participant.forEach(p => {
        if (!map.has(p)) map.set(p, 1);
        else map.set(p, map.get(p) + 1);
    })
    
    completion.forEach(c => {
        if (map.get(c) === 1) map.delete(c);
        else map.set(c, map.get(c) - 1);
    })
    
    return [...map.keys()][0];
}