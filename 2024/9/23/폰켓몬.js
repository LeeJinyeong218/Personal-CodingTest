function solution(nums) {
    const n = nums.length;
    let map = new Map();
    let count = 0;
    nums.forEach(num => {
        if (!map.has(num)) {
            map.set(num, 1);
            count++;
        }
        else map.set(num, map.get(num) + 1);
    })
    
    return Math.min(n/2, count);
}