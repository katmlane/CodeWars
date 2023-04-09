




//https://stackoverflow.com/questions/41427029/replace-a-letter-with-its-alphabet-position

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt







const alphabetPosition = text => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let uTF = text.toUpperCase().charCodeAt(i)
      if (uTF > 64 && uTF < 91) result += (uTF - 64) + " ";
    }
  
    return result.slice(0, result.length - 1);
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));
