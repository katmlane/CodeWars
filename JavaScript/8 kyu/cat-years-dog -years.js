// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that



//
//  Parameters
//

//human years
// humanYears >= 1
// humanYears are whole numbers only

//
//  Returns
//

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
//[humanYears,catYears,dogYears]

//
//  Examples
//

//(1), [1,15,15]
//(2), [2,24,24]
//(10), [10,56,64]


//
//  PseudoCode
//

// need to compaare human age to conditional




const humanYearsCatYearsDogYears = humanYears => {
    let catYears;
    let dogYears;

    if (humanYears === 1){
        return [humanYears,15,15]
    }
    else if (humanYears === 2){
        return[humanYears, 24, 24]
    }
    else if (humanYears >= 3) {
        return [humanYears, (24 + (humanYears -2)*4), (24 + (humanYears -2)*5) ]
    }
};





function humanYearsCatYearsDogYears (humanYears) {
    let catYears;
    let dogYears;

    if (humanYears === 1){
        return [humanYears,15,15]
    }
    else if (humanYears === 2){
        return[humanYears, 24, 24]
    }
    else if (humanYears >= 3) {
        return [humanYears, (24 + (humanYears -2)*4), (24 + (humanYears -2)*5) ]
    }


}
console.log(humanYearsCatYearsDogYears(10))