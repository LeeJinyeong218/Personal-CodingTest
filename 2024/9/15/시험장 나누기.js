function solution(k, num, links) {
    const tree = links.reduce((tree, v, i) => {
        tree[i] = {
            cost: num[i],
            l: v[0],
            r: v[1],
        };
        return tree;
    }, {});
 
    const n = num.length;
    const root = links.reduce((root, v) => {
        const [a, b] = v;
        if (a > 0) root -= a;
        if (b > 0) root -= b;
        return root;
    }, n * (n - 1) / 2);
 
    const go = limit => {
        const callStack = [root];
        // 인덱스의 코스트와 카운트 반환
        const returnValues = {
            "-1": {
                cost: 0,
                cnt: 0,
            }
        };
        // 맨 마지막 요소 반환 함수
        callStack.back = function () { return this[this.length - 1];};
        // callStack 함수가 빌 때까지
        while (callStack.length) {
            const now = callStack.back()
                , {cost, l, r} = tree[now]
                , lRes = returnValues[l]
                , rRes = returnValues[r];
 
            // 자식 노드의 returnValue가 없을 때 callStack에 넣고 continue
            if (!lRes) {
                callStack.push(l);
                continue;
            }
            if (!rRes) {
                callStack.push(r);
                continue;
            }
            // 자식노드의 return value가 있으면 pop() -> 현재 노드를 pop()한다.
            callStack.pop();
 
            // 현재노드의 코스트와 카운트를 입력한다.
            returnValues[now] = {
                cost,
                cnt: lRes.cnt + rRes.cnt, // 자식 노드의 카운트를 더한다.
            }
            const ret = returnValues[now];
 
            // 노드들의 코스트 합이 limit 이하인지 구하는 함수
            const underLimit = (...nodes) => {
                const sum = nodes.reduce((sum, v) => sum += v.cost, 0);
                return sum <= limit;
            }
 
            // 부모 노드와 두 자식 노드의 비용 값이 조건을 충족 시 ret의 cost에 두 노드 코스트 값을 더한다.
            // 자식 하나의 비용값이 조건을 충족시 노드 하나 코스트 값을 더한다. 한 쪽은 분리하여 cnt++;
            // 두 쪽 모두 안되면 두 쪽 다 분리하여 cnt += 2;
            if (underLimit(ret, lRes, rRes)) {
                ret.cost += lRes.cost + rRes.cost;
            } else if (underLimit(ret, lRes) || underLimit(ret, rRes)) {
                ret.cost += Math.min(lRes.cost, rRes.cost);
                ret.cnt++;
            } else {
                ret.cnt += 2;
            }
        }
        // 루트의 return value를 보낸다.
        return returnValues[root];
    };
 
    const getAnswer = () => {
        // 이진 탐색으로 시작
        let l = Math.max(...num), r = num.reduce((p, n) => p + n, 0);
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
 
            // 그룹의 수가 k보다 작으면 답의 범위를 l ~ m - 1로 줄인다.
            // k 이상이면 m + 1 ~ r로 탐색한다.
            if (go(m).cnt < k) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return l;
    };
 
    return getAnswer();
}