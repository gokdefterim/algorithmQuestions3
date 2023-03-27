var arr = [1, 3, 5, 7, 9];
var val = 5;

var index = (arr, val) => {
    
    var results = [];
    var count = -1;

    arr.forEach(element => {
        count += 1
        element == val && results.push(count);
    });

    console.log(results[0]);

    results.length == 0 && console.log(-1);

}