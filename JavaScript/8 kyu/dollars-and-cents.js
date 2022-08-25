// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

// function formatMoney(amount){
//   // your formatting code here
// }

//parameters

// a string 

//returns
// string with $ in front and .00 behind

//examples

//console.log(formatMoney(39.99)) //'$39.99'

//pseudocode

//need to check to see if there is a decimal, 
//need to add a $ to the front of the string

const formatMoney = amount => {
    let spltAmount = amount.toFixed(2).toString().split("");
    let money = ["$"];
    for (i =0; i < spltAmount.length; i++){
      money.push(spltAmount[i])
    }
    return money.join("")
  };
  
  
  console.log(formatMoney(39.9 ))
  
  //refactored
  
  function formatMoney(amount){
    return '$' + amount.toFixed(2);
  }
  
  
  //refactored 
  
  let formatMoney = (amount) => `$${amount.toFixed(2)}`