// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//Parameters

// string

//Return

// count of the vowels (a, e, i, o, u) in the string

//Examples

//"abracadabra" // 5

//Pseudocode


//need to remove spaces
//need to split into leters
// need to compare each of letters to the SWITCH cases
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// cannot use switch case with an array so using a forEach


// function getCount(str) {
//   let vowelsCount = 0;
  
//   // enter your magic here
  
//   return vowelsCount;
// }


const getCount = str => {
  let vowelCount = 0;
  let letters = str.split("");
  console.log(letters)
  letters.forEach(x => {
    if (x ==="a") {
      vowelCount++
    } else if(x ==="e"){
      vowelCount++
    } else if(x ==="i"){
      vowelCount++
    } else if(x ==="o"){
      vowelCount++
    } else if(x ==="u"){
      vowelCount++
    } else {
      console.log(`${x} is not a vowel`)
    }
  })
  
  console.log(vowelCount)
  return vowelCount;

};

console.log(getCount("hey there"))
