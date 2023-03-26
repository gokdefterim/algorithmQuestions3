var mod = (n1, n2) => {

    var arr = [];

    for (let i = 0; i < n1; i++) {
        
        if (i/n2 == Math.floor(i/n2)) {
            arr.push(i);
        }
        
    }

    console.log(n1-arr.pop());

}