// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//articles used
//https://www.reddit.com/r/learnjavascript/comments/4ul1lq/could_anyone_explain_to_me_what_this_line_of_code/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions






//function disemvowel(str) {

//return str.replace(/[aeiou]/gi, ''");

//}




// function disemvowel(str) {
//  let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''))
//  return newStr;
// }




function disemvowel(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    return newStr;
}


console.log(disemvowel("This website is for losers LOL!"));




