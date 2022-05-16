// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).



// function isValidWalk(walk) {
//     //insert brilliant code here
//   }



//
//  Parameters
//

//array of single letter directions 
//always will receive a valid string 
//will not recieved an empty array

//
//  Returns
//

//true or false 

//
//  Examples
//

// ['n','s','n','s','n','s','n','s','n','s'] // 'should return true'
// ['w','e','w','e','w','e','w','e','w','e','w','e'] // 'should return false'
//['w'] // 'should return false'
//['n','n','n','s','n','s','n','s','n','s'] // 'should return false'

//
//  PseudoCode
//

// it should be 10 elements long if it isn't should automatically return false

//  you have to make it back to the starting point
//need to have a counter for n/s and e/w
//need to look at each element and assign value n:+1, s:-1, e:+1, w:-1
// counter for both should return to 0


const isValidWalk = walk => {

    let northSouth = 0;
    let eastWest = 0;

    if (walk.length !== 10 ) {
        
        console.log(false)
        return false
    }

    walk.forEach(direction =>{
        if (direction === "n") {
            northSouth += 1
        } else if (direction === "s") {
            northSouth -= 1
        } else if (direction === "e") {
            eastWest += 1
        } else if (direction === "w") {
            eastWest -= 1
        }
        

        // console.log(northSouth)
        // console.log(eastWest)

    })

    console.log(northSouth)
    console.log(eastWest)

    if (northSouth === 0 && eastWest === 0) {
        return true
    } else {
        return false
    }
}








//codewars testing failed at **should return false if walk does not bring you back to start**

// with the help of this article I realized that I needed to rework my code
//https://dev.to/papansarkar101/take-a-ten-minute-walk-a-codewars-kata-solution-by-papan-sarkar-4mf0


// const isValidWalk = walk => {
// let northSouth = [];
// let eastWest = [];
// if (walk.length === 10){
    // for(let direction of walk) {
    //     if (direction === "n") {
    //         northSouth += 1
    //     } else if (direction === "s") {
    //         northSouth -= 1
    //     } else if (direction === "e") {
    //         eastWest += 1
    //     } else if (direction === "w") {
    //         eastWest -= 1
    //     }


//     walk.forEach(direction =>{
//         if (direction === "n") {
//             northSouth += 1
//         } else if (direction === "s") {
//             northSouth -= 1
//         } else if (direction === "e") {
//             northSouth += 1
//         } else if (direction === "w") {
//             northSouth -= 1
//         })
//     }
    

//         console.log(northSouth)
//         console.log(eastWest)
    




//     if (northSouth === 0 && eastWest === 0) {
//         return true
//     }

// } else {
//     return false 
// }
// };


// after writing all of this I realized that I had been assigning "w" and "e" to the inappropriate counter
console.log(isValidWalk(['e','w','n','s','e','w','w','e','n','s']));

