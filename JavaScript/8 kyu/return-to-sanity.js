// This function should return an object, but it's not doing what's intended. What's wrong?


// function mystery() {
//   var results =
//     {sanity: 'Hello'};
//   return
//     results;
// }


let results = {sanity: 'Hello'};
const mystery = () =>   results;

console.log(mystery())


//needed to look this one up
//objects need to be declared outside of the function or else they return undefined. 
