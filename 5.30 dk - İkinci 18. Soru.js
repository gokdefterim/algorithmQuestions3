var arr = [2, 7, 4, 2, 6, 4];

var repeated = (arr) => {

    var result = [];

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i+1; j < arr.length; j++) {
            
            if (arr[i] == arr[j] && result.indexOf(arr[i]) == -1) result.push(arr[i]);
            
        }
        
    }

    console.log(result);

}
repeated(arr);