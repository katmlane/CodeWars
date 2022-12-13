You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]



https://www.geeksforgeeks.org/how-to-remove-duplicate-elements-from-javascript-array/
https://stackoverflow.com/questions/7000851/how-to-sort-numbers-correctly-with-array-sort

function mergeArrays(arr1, arr2) {
  
}


const mergeArrays = (arr1, arr2) => {
  let duplicates = [];
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  };
  arr1.sort(function(a,b){return a - b});
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr1[i + 1]) {
      duplicates.push(arr1[i + 1])
    };
  };
  return arr1
}



const mergeArrays = (arr1, arr2) => {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}
