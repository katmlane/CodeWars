// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.


// function search(budget, prices) {

// // return array of prices that are within budget

// }



// There are two parameters in the problem. The first will be an integer representing the amount of money you have. The second parameter is an array of coffee bean prices. The goal is to return a string with the prices of coffee beans we can afford. I will accomplish this using the built in method .filter(). I will compare the the value of the budget to each element of that array. Then need to .join(",") the elements of the array with a comma and no space.

// const search = (budget, prices) => {
//  let affordable = prices.filter(x => x <= budget);
//   console.log(affordable)
//   return affordable.join(",")
// };


//refactored


const search = (budget, prices) => prices.filter(x => x <= budget).sort((a,b) => a - b).join(",");

console.log(search(3, [6, 1, 2, 9, 2]));


