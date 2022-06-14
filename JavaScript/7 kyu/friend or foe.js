// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]


// function friend(friends){
//     //your code here
//   }

//parameters 

//recieve an array of string  names

//return

// return an array with word.length() = 4, un mutated

//examples 

//friend(["Ryan", "Kieran", "Mark"])   //["Ryan", "Mark"]

//pseudocode

//need to filter the array for word.length === 4


const friend = friend => friend.filter((name) => name.length === 4);

console.log(friend(["Ryan", "Kieran", "Mark"]))