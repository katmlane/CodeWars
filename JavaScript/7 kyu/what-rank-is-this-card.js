// What is the rank of a playing card? The function takes a string like '2c' or 'Kh' and returns a value based on rank of the card. The first character corresponds to the rank of the card and the second character corresponds to the suit of the card. Cards 2-9 should return the corresponding number. T returns 10, J => 11, Q => 12, K => 13 and A => 14. Otherwise the rank should be returned as 0.



//parameters 

//a string 

//returns 

//numeric value related to the [0] index of the string

//examples

// rank('2c') == 2;
// rank('Tc') == 10;
// rank('As') == 14;
// rank('1c') == 0; // There is no card '1'
// Suits can be disregarded.


//pseudocode

//need to look at the first letter of the string
//slice?
//can turn into an array and look at strToArr[0]


const rank = card => {
let strIndexZero = card.slice(0,1);
if (strIndexZero == Number) {
    return Num(strIndexZero);
}
else if (strIndexZero != Number) {
    if (strIndexZero == "T") {
        return 10;
    }
    else if (strIndexZero == "J") {
        return 11;
    }
    else if (strIndexZero == "Q") {
        return 12;
    }
    else if (strIndexZero == "K") {
        return 13;
    }
    else if (strIndexZero == "A") {
        return 14;
    }
}


}