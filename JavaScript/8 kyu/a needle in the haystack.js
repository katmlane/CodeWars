// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

//
//  Parameters
//

// an array of strings containing one  "needle"


//
//  Returns
//

//"found needle at position [index of "needle"]

//
//  Examples
//

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

//
//  PseudoCode
//

// need to look at each element in the array and find the index of "needle"
// need to return "found the needle at position 5"


// const findNeedle = haystack => {
//   let needle = haystack.indexOf("needle")
//   console.log(`found the needle at position ${needle}`)
//   return `found the needle at position ${needle}`
// }

// findNeedle(['hay', 'needle', 'hay', 'hay', 'moreJunk', 'randomJunk'])



//refactor


const findNeedle = haystack => `found the needle at position ${haystack.indexOf("needle")}`;

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))