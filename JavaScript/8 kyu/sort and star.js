// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


// function twoSort(s) {

// }



//parameters 

//an array of strings


//return

// a string with the highest ACII starting letter spaced by *** between each character.


// examples 

//twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) // 'b***i***t***c***o***i***n' )
//twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) // 'a***r***e')

//pseudocode


//need to sort the array
//need to select for the [0] of the sorted array
//need to seperate the characters of the arr[o] 
//need to rejoin and return the characters of arr[0] with '***' between



const twoSort = s => {
    const sorted = s.sort();
    const splited = sorted[0].split("");
    return splited.join("***")
}








console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))