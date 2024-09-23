function solution(clothes) {
    let map = new Map();
    clothes.forEach(([name, type]) => {
        if (!map.has(type)) map.set(type, 1);
        else map.set(type, map.get(type) + 1);
    })
    
    return [...map.keys()].reduce((pro, next) => pro * (map.get(next) + 1), 1) - 1;
}