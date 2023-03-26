var decimal = (num) => {

    var arr = num.toString().split("").reverse();
    var sum = 0;
    var index = -1;

    arr.forEach(element => {
        
        index += 1;
        if(element === '1') {

            sum += Math.pow(2, index);
        }

    });

}