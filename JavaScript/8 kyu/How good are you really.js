
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!




// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//   }









//
//Parameters
//

//two parameters
//an array and a number
// 


//
//Return
//


// average numbers in the array and return :
// true if single number is greater than the average
//false if the average is greater than "your test score"

//
//Examples
//

//([2, 3], 5) // true
//([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) //false
//([41, 75, 72, 56, 80, 82, 81, 33], 50) //false
//([29, 55, 74, 60, 11, 90, 67, 28], 21) // false
//([100, 40, 34, 57, 29, 72, 57, 88], 75) //true

//
//Pseudocode
//

// average the class scores
// if your score > class score return true
//if class scores >  your score return false 



// let betterThanAverage = (classPoints, yourPoints) => {
//     let classAvg = (classPoints.reduce((a,b) => a+b, 0) + yourPoints)/ classPoints.length + 1;
//     console.log(classAvg)
//     if (classAvg >= yourPoints) {
//         return false;
//     } else {
//         return true;
//     }
// }




//refactored


// let betterThanAverage = (classPoints, yourPoints) => {
//     let classAvg = (classPoints.reduce((a,b) => a+b, 0) + yourPoints)/ classPoints.length + 1;
//     return classAvg >= yourPoints ? false : true

// }




//codewars said I could have added my points into the class points average but I don't think that is true as 2 tests failed and it seems that they would have been correct if I hadn't added my points to the class average


//codewars correct answer

let betterThanAverage = (classPoints, yourPoints) => {
    let classAvg = classPoints.reduce((a,b) => a+b, 0)/ classPoints.length + 1;
    console.log(classAvg)
    if (classAvg >= yourPoints) {
        return false;
    } else {
        return true;
    }
}
console.log(betterThanAverage([2, 3], 5) )