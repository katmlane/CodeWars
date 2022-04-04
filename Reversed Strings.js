// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//short form

let reverse = str => str.split('').reverse().join('');

console.log(reverse("racecar"))  //'racecar'


//long form

function longRev (str) {
    let rev = str.split("").reverse().join("");
    return rev;
}

console.log(longRev("Leon Noel")) // "leoN noeL"