function solution(routes) {
    const routesSorted = routes.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else return a[1] - b[1];
    })
    
    let camera = routesSorted[0][1];
    let count = 1;
    
    for (let route of routesSorted) {
        if (camera >= route[0] && camera <= route[1]) continue;
        
        count++;
        camera = route[1];
    }
    
    return count;
}