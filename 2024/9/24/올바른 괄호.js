function solution(s){
    let st = [];
    for (let c of s) {
        if (c === "(") {
            st.push(c);
        } else {
            if (st.length < 1) return false;
            st.pop();
        }
    }
    
    if (st.length > 0) return false;
    return true;
}