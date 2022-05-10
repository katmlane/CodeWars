// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



// function longest(s1, s2) {
//     // your code
//   }



//things I used 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


//need to combine the strings
//need to sort the long string
//need to then compare each of the characters and push the unique characters
let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";


let longest = (s1, s2) => {
    let longStr = s1.concat(s2).split("").sort()
    let finalLong = [];

    let discards = longStr.filter(letter => {
        if (!finalLong.includes(letter)) {
            finalLong.push(letter)
            
        }
    })



    //console.log(longStr)
   // console.log(finalLong)
    //console.log(discards)



    return finalLong.join("")


}


console.log(longest(a,b))


// function longest(s1, s2) {
// 	var result = [];
// 	return s1.concat(s2).split("").sort().filter(function(x){
// 		if (!result.includes(x)) {
// 			result.push(x);
// 			return x;
// 		}
// 	}).join("");
// }



//Best practice on codewars
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')