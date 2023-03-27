var arr = [2, 5, 8, 11, 13, 17];
var val = 28;

var target = (arr, val) => {

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i+1; j < arr.length; j++) {
            
            for (let z = j+1; z < arr.length; z++) {
                
                arr[i] + arr[j] + arr[z] == val && console.log([arr[i], arr[j], arr[z]]);

            }
            
        }
        
    }

}

target(arr, val);