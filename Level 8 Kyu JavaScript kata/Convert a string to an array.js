//Write a function to split a string and convert it into an array of words.

//Examples (Input -> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//short hand
let stringToArray = str => str.split(" ");

//longform

function stringToArray (str) {
    let arr = str.split(" ")
    return arr
}



//console.log(stringToArray("I love arrays they are my favorite"))



//figure out how they solved it!

function stringToArray(string){
    var result = [];
    var traverse = function foo(string){
        for(var i=0;i<string.length;i++){
            var chr = string.charAt(i);
            if(chr === " "){
                result.push(string.slice(0,i));
                foo(string.slice(i+1));
                return;
            }
        }
        result.push(string);
    };
    traverse(string);
    return result;
}