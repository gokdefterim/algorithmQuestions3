var target = (arr, tar) => {

    arr = [2, 4, 6, 8];
    tar = 10;
    var result = []

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i+1; j < arr.length; j++) {
            
            if (arr[i] + arr[j] === tar) {
                result.push(arr.indexOf(arr[i]));
                result.push(arr.indexOf(arr[j]));
            }
            
        }
        
    }

    console.log(result.splice(0, 2));

}