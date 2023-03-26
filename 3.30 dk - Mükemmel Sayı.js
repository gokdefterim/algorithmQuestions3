function perfect () {
    
    var arr = [];

    for (let i = 2; i < num; i++) {
        num % i === 0 && arr.push(i);
    }

    var sum = 1

    arr.forEach(element => {
        sum+=element;
    });

    sum === num && console.log(true);

}