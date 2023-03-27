var str = "merhaba dünya";

var noRepeat = (str) => {

    var arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i+1; j < arr.length; j++) {
            
            if(arr[i] == arr[j]) arr.splice(arr.indexOf(arr[j]), 1);
            
        }
        
    }

    console.log(arr.join(""));

}

noRepeat(str);