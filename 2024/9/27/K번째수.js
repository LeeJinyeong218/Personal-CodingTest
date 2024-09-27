function solution(array, commands) {
    return commands.map(([s, e, n]) => {
        return array.slice(s - 1, e).sort((a, b) => a - b)[n - 1];
    })
}