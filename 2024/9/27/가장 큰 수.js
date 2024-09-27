function solution(numbers) {
    if (numbers.every(i => i === 0)) return "0";
    return numbers.sort((a, b) => {
        const aStr = a.toString();
        const bStr = b.toString();
        return Number(bStr + aStr) - Number(aStr + bStr);
    }).join("")
}