function solution(bridge_length, weight, truck_weights) {
    let trucks = [...truck_weights];
    let bridge = [];
    let t = 0;
    let cur_w = 0;
    
    while (trucks.length > 0 || bridge.length > 0) {
        t++
        
        if (bridge[0] && bridge[0][1] + bridge_length === t) {
            const [out_w, _] = bridge.shift();
            cur_w -= out_w;
        }
        
        if (bridge.length < bridge_length && cur_w + trucks[0] <= weight) {
            const in_w = trucks.shift();
            bridge.push([in_w, t]);
            cur_w += in_w;
        }
    }
    
    return t;
}