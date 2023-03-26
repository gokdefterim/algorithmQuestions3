var binary = (num) => {

    var remain;
    var arr = [];

    while (num !== 1) {
        remain = num % 2;
        arr.push(remain);
        num = Math.floor(num / 2);
    }

    var result = Number("1" + arr.join(""));

    console.log(result);

}