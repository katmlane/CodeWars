// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// function divCon(x){

// }


//parameters 

// array of string integers and numbers

//returns 

//string integers - number integers

//examples


//psudocode 

// need to identify which are number and which are strings then reduce and do arithmetic


let divCon =x =>{
    let sum = 0;
    for(let i = 0; i < x.length; i++){
      if(typeof x[i] === 'number'){
        sum += x[i];
      }else{
        sum -= x[i];
      }
    }
    return sum;
  }
  
  
  //refactored 
  
  function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }