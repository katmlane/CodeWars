// 7,660Mishaboo
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Task:
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

// illustration

// Note:
// All inputs are integers. Assume no irregularities to the cuboid brick. You may assume the bottle is shaped like a cylinder. The brick cannot fit inside the rim. The ice brick placed into the bottle is the largest possible cuboid that could actually fit inside the inner volume.

// Example 1:
// radius = 1
// bottle_length = 10
// rim_length = 2

// volume = 16
// Example 2:
// radius = 5
// bottle_length = 30
// rim_length = 7

// volume = 1150


//function iceBrickVolume(radius, bottleLength, rimLength) {
  // Your code should be here ;)
//}


//parameters

// 3 integers

//returns

//the volume of the ice brick

//examples

// Example 1:
// radius = 1
// bottle_length = 10
// rim_length = 2

// volume = 16
// Example 2:
// radius = 5
// bottle_length = 30
// rim_length = 7

// volume = 1150

//pseudocode

//have to calculate cylinder area 
// area for right cylinder 
//A=2πrh+2πr2
//Cylinder_area = 2*PI*radius* cube_length + 2 * PI * radius ^ 2

//cube_length = bottle_length - rim-length


//cube area based on diagnal 
//https://www.cuemath.com/measurement/volume-of-cube/

// diagonal of face = SQ. 2 * side length
//diagonal of cube = Sq. 3 * s
// (Sq. 3 * diameter ^ 3) / 9

// (1) The base of the cylinder has area 25π
// (2) The height of the cylinder is 10.


// Diameter d> Height h
// The largest possible cube shall have each area diagonal = diameter of the cylinder.
// S1 -  πr^2=25π
// r=5. We can find each edge of cube with the help of diagonal.
// Sufficient


const iceBrickVolume(radius, bottleLength, rimLength) => (bottleLength - rimLength) * radius * 2 * radius;