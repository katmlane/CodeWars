Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function take(arr, n) {
  
}


const take = (arr, n) => {
  let resArr = [];
  
  for (let i =0; i < n; i++) {
    arr.length > i ? resArr.push(arr[i]) : resArr
  }
  
  return resArr;
};
