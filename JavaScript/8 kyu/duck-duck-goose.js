// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)


// function duckDuckGoose(players, goose) {
//   // ...
// }



const duckDuckGoose = (players, goose) => players[(goose-1) % players.length].name;



// Every player (element in players array) is constructed into an object:

// class Player {
//   constructor(name) {
//       this.name = name;
//   }
// }
// let players = ex_names.map((n) => new Player(n));
// .name allows you to access and return the property value. If it would not be there you would return the whole object. For example Player { name: 'a' }
