// Write a function that checks if a given string (case insensitive) is a palindrome.


// function isPalindrome(x) {
//   // your code here
// }


//cheating answer

function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}

//fast answer 
function isPalindrome(s,i) {
 return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
}


//even faster answer

function fastestIsPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}

//refactored


const isPalindrome = x => {
  let xLow = x.toLowerCase();
  const xLen = Math.floor(x.length / 2);
  for (let i = 0; i< xLen; i ++) {
   if ( xLow[i] !== xLow[xLow.length - i - 1]) {
     return false;
   };
}
  return true;
};

