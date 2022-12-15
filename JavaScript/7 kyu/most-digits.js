// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


// (findLongest([1, 10, 100]), 100)
// Test.assertEquals(findLongest([9000, 8, 800]), 9000)
// Test.assertEquals(findLongest([8, 900, 500]), 900)


// function findLongest(array){
//   // code here
// }

const findLongest = array => 




function findLongest(array){
  let num = '0';
  for(let i=0; i<array.length; i++) {
    let string = array[i].toString();
    if(string.length > num.length) {
      num = string;
    }
  }
  return parseInt(num);
}
