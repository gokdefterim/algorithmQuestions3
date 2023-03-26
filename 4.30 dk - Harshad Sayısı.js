var harshad = (num) => {

    var arr = num.toString().split("");

    var sum = 0;

    arr.forEach(element => {
        sum += Number(element);
    });

    num % sum === 0 && console.log(true)

}