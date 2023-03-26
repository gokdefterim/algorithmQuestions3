var acceleration = (minute) => {

    var hipo =  Math.sqrt(Math.pow(480, 2) + Math.pow(15, 2));
    var speed;
    var first15 = 480 * 15 / 2;
    var first35 = 480 * 15 / 2 + 480 * 20;
    var remain;

    if (minute <= 15) {

        var hipo2 = (minute * hipo) / 15;
        speed = Math.sqrt(Math.pow(hipo2, 2) + Math.pow(minute, 2));

        console.log((speed * minute) / 2);
        
    }
    else if(minute > 15 && minute < 35) {

        console.log(first15 + 480 * (minute - 15));

    }
    else {

        remain = ((50 - minute) * hipo) / 15;
        
        console.log(first35 + first15 - remain);

    }

}