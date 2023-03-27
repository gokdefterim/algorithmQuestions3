var arr = [2, 5, 9, 15, 20];

var minDiff = (arr) => {

    var min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i+1; j < arr.length; j++) {
        
            if (Math.abs(arr[i] - arr[j]) < min) {

                min = Math.abs(arr[i] - arr[j]);

                console.log([arr[i], arr[j]]);

            }
            
        }
        
    }

}

minDiff(arr);