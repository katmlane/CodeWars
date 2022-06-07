// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


// function peopleWithAgeDrink(old) {
//     return '';
//   };



  //parameters

  //integer

  //return

  // phrase appropriate for the age 

  //examples

  // 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

//pseudocode


//want to try to use a switch case as a conditional
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

const peopleWithAgeDrink = old => {
    if (old <= 13) {
        return  ("drink toddy");

    }
    else if (old >= 14 && old <= 17) {
        return ("drink coke")

    }
    else if (old >= 18 && old <= 20 ) {
        return ("drink beer")
    }
    else if (old >= 21) {
        return ("drink whisky")

    }
   
}

console.log(peopleWithAgeDrink(29))

// i don't think this kata was worded well. 
// How I would change the question 

//Add the range examples 

// "drink toddy" under 14
//"drink coke" under 18 
//"drink beer" under 21
//"drink whiskey" over 21