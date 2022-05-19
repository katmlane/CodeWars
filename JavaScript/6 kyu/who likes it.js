// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// Note: For 4 or more names, the number in "and 2 others" simply increases.

// function likes(names) {
//     // TODO
//   }

//
// Parameters
//

// an array of names of any amount
// can recieve an empty array

//
// Return
//

// for an empty array = "no one likes this"
// for an array of 1 = "Peter likes this"
// for an array of 2 = "Peter and Mark like this"
//for an array of 3 = "Peter, Mark and John like this"
// for an array of 4 or more = "Alex, Jacob and (x-2) like this"

//
//Examples
//

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//
//Psuedocode
//

// return phrase based on array length and need to return elements of said array in phrase
//conditional if arr.length = 0 , arr.length = 1, arr.length = 2, arr.length = 3, arr.length = 4+

// let likes = names => {
//     let length = names.length;
//     let phrase = "";
//     let number = length - 2;

//     if (length === 0){
//        console.log("no one likes this")
//        phrase = "no one likes this"
//        return phrase
//     } else if(length === 1) {
//         console.log(`${names[0]} likes this`)

//         phrase = `${names[0]} likes this`
//         return phrase
//     }else if (length === 2) {
//         console.log(`${names[0]} and ${names[1]} like this`)
//         phrase = `${names[0]} and ${names[1]} likes this`
//         return phrase
//     }else if (length === 3) {
//         console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`)
//         phrase = `${names[0]}, ${names[1]} and ${names[2]} like this`
//         return phrase
//     }else if (length >= 4) {
//         console.log(`${names[0]}, ${names[1]} and ${number} like this`)
//         phrase = `${names[0]}, ${names[1]} and ${number} like this`
//         return phrase
//     }

// }

// refactored

let likes = (names) => {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
};

console.log(likes(["Peter", "john", "kat", "albert", "arthur"]));

// after viewing the answers I really liked this solution using an object

function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

//accesses the object by the bracket notation method at the end

//I think it is a little confusing because usually you reference arrays with brackets and their index [i] but it is also common to use brackets to get values inside of objects, and sometimes that is the only way to get the property's value (i.e. a dash in the property name). There isn't an array at the end of the object. Not ES6 related.
