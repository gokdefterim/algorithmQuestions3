var arr = [10, 9, 2, 5, 7, 101, 120, 18, 19];

var consecutive = (arr) => {

    var temp = [];
    var result = [];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > arr[i-1]) {

            temp.pop();
            temp.push(arr[i-1]);
            temp.push(arr[i]);

            if (temp.length > result) {
                result = temp;
            }

        }
        else {
            temp = [];
        }


        
    }

    console.log(result);

}

consecutive(arr);