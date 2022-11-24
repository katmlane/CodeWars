// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"\



const replace = s => {
    let sArr = s.split("");
    const vowel = ["a","e","i","o","u","A","E","I","O","U"];
    let resArr =[];
    for (let i = 0; i < sArr.length; i++) {
        let sArrEl = sArr[i];  
      if (sArrEl.every(el=>el ===))) === true) {
        resArr.push("!");
      }
      else {
        resArr.push(sArr[i]);
      }
    }
    return resArr.join("")
  }

  console.log(replace("!Hi! Hi!"))

//saw a codewars solution and upset because I was pretty close, would like to revist for a refactored solution w/o regex




  function replace(s) {
    let sArr = s.split('');
    
    for (let i = 0; i < s.length; i += 1) {
      if (s[i] === 'a' ||
          s[i] === 'e' ||
          s[i] === 'i' ||
          s[i] === 'o' ||
          s[i] === 'u' ||
          s[i] === 'A' ||
          s[i] === 'E' ||
          s[i] === 'I' ||
          s[i] === 'O' ||
          s[i] === 'U') {
        sArr[i] = '!';
      }
    }
    return sArr.join('');
  }