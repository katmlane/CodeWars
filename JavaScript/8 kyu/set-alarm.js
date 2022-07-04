// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true



//function setAlarm(employed, vacation){

// }

//parameters 

//2 booleans

//returns

// boolean 

//examples


//console.log(setAlarm(true, true)) // false
//console.log(setAlarm(false, true)) //fasle
//console.log(setAlarm(false, false)) //false
//console.log(setAlarm(true, false) )  //true

//pseudocode

// need to check first boolean if true alarm set = true
//second boolean leave true if not on vacations 
// leave false if on vacation 

const setAlarm = (employed, vacation) => {
    if (employed === true && vacation === true) {
        return false;
    } 
    else if (employed === true && vacation ===false) {
        return true;
    }
    else if (employed === false) {
        return false;
    }
};

console.log(setAlarm(true, false))