class Node {
    constructor(x, y, idx) {
        this.x = x;
        this.y = y;
        this.idx = idx;
        this.p = null;
        this.l = null;
        this.r = null;
    }
}

function solution(nodeinfo) {
    let nodes = nodeinfo.map(([x, y], i) => new Node(x, y, i + 1)).sort((a, b) => {
        if (a.y !== b.y) {
            return b.y - a.y;
        } else {
            return a.x - b.x;
        }
    });
    const root = getTree(nodes);
    
    // 전위 순회
    let q = [root]
    let answer1 = [];
    
    while (q.length > 0) {
        const cur = q.pop();
        
        
        if (cur.r) q.push(cur.r);
        if (cur.l) q.push(cur.l);
        
        answer1.push(cur.idx);
    }
    
    // 후위 순회
    let answer2 = [];
    
    const postorder = (root) => {
        if (root.l) postorder(root.l);
        if (root.r) postorder(root.r);
        answer2.push(root.idx);
    }
    
    postorder(root);
    
    return [answer1, answer2];
}

const getTree = (nodes) => {
    const root = nodes[0];
    if (nodes.length < 2) {
        return root;
    }
    let leftNodes = [];
    let rightNodes = [];
    for (let i = 1; i < nodes.length; i++) {
        if (nodes[i].x < root.x) {
            leftNodes.push(nodes[i]);
        } else {
            rightNodes.push(nodes[i]);
        }
    }
    
    if (leftNodes.length > 0) {
        const leftRoot = getTree(leftNodes);
        root.l = leftRoot;
        leftRoot.p = root;
    }
    
    if (rightNodes.length > 0) {
        const rightRoot = getTree(rightNodes);
        root.r = rightRoot;
        rightRoot.p = root;
    }
    
    return root;
}

