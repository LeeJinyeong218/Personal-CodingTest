function solution(arr)
{
    return arr.reduce((p, n) => {
        if (p[p.length - 1] !== n) {
            p.push(n);
        }
        return p;
    }, []);
}