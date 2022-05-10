// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.



// function getGrade (s1, s2, s3) {
//     // Code here
//   }


// need to do some math s1, s2, s3 let average = (s1 + s2 + s3) / 3

// need conditional to compare it to the letter grades


let getGrade = (s1, s2, s3) => {
    let average = (s1 + s2 + s3) / 3;
    console.log(average)

    if (average >= 90 && average <=100 ) {
        console.log("A")
        return "A"
    } else if (average >= 80 && average <90){
        console.log("B")
        return "B"
    }else if (average >= 70 && average <80){
        console.log("C")
        return "C"
    }else if (average >= 60 && average <70){
        console.log("D")
        return "D"
    }else if (average >= 0 && average <90){
        console.log("F")
        return "F"
    }


}

console.log(getGrade(75, 78, 73))





// this was a solution that I thought was cool, I had briefly thought about if the parameters were given as an array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function getGrade(...scores) {
//     let average = scores.reduce((a, b) => a + b) / scores.length
    
//     if (average >= 90) return 'A'
//     else if (average >= 80) return 'B'
//     else if (average >= 70) return 'C'
//     else if (average >= 60) return 'D'
//     else return 'F'
//   }