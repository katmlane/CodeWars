



//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//[10, 343445353, 3453445, 3453545353453] should return 3453455.



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort



arr = [19, 5, 42, 2, 77]
function sumTwoSmallestNumbers(arr) {
// request positive integers only
    const positiveArr = arr.filter(num => num>= 0);


// sort the array so that the min can be retrieved
    const newArr = positiveArr.sort(function(a, b) {
    return a - b;
    });
//add 2 lowest numbers
    const total = newArr[0] + newArr[1];
    console.log(newArr[0])
    return total;
    
    }


 


    console.log(sumTwoSmallestNumbers(arr))