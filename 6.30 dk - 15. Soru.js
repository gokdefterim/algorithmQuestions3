var arr = [1, 5, 3, 9, 7];

var maxDiff = (arr) => {

    var diff = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      
        if (Math.abs(arr[i] - arr[i+1]) > diff) {
            diff = Math.abs(arr[i] - arr[i+1]);
        }
      
    }

    console.log(diff);

}

maxDiff(arr);