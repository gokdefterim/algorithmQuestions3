var arr = ["flower", "flow", "flight"];

var common = (arr) => {

    var result = "";

    for (let i = 0; i < arr[0].length; i++) {
        
        for (let j = i+1; j < arr[0].length; j++) {

            var isEvery = arr.every(function match (element){
                return element.search(arr[0].substring(i, j)) != -1;
            });

            if (isEvery == true && result.length < arr[0].substring(i, j).length){
                
                result = arr[0].substring(i, j);
                
            }

        }
        
    }

    console.log(result);

}

common(arr);