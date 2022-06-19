// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]


// function monkeyCount(n) {
// // your code here
// }

//parameters 

//integer

//return

//an array counting up to integer

//examples

//monkeyCount(5) // [1, 2, 3, 4, 5]
//monkeyCount(3) // [1, 2, 3]
//monkeyCount(9) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
//monkeyCount(10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//monkeyCount(20) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


//pseudocode

//need to loop through to count up to integer

const monkeyCount = n => {
  let count = [];
  for (i= 1; i <= n; i++) {
    count.push(i);
  }
  return count;
};

console.log(monkeyCount(1))
