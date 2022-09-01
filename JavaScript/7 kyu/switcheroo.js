// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


// function switcheroo(x){

// }


//parameters 

//string of as bs and cs

//returns 

// a <-> b
// c stay the sam

//examples

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//pseudocode

//conditional that will switch a for b and b for a
//need a loop to go through the string

const switcheroo = x => {
    let xArr = x.split("");
    let newArr =[]
    for ( let i = 0; i <= xArr.length; i++){
      if (xArr[i] === "a") {
        newArr.push("b");     
      }
      else if (xArr[i] === "b"){
        newArr.push("a");
      }
      else if (xArr[i] === "c") {
        newArr.push("c")
      }
       
    }
    return newArr.join("");
  };
  
  
  console.log(switcheroo('aabacbaa'))
  
  //refactored 
  
  const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('');