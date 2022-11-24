// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// function combat(health, damage) {
//     // Write your code here
//   }



// health -damage = newhealth 


// const combat = (health, damage) => health = health - damage;

//health cannot go below zero 
//need to include condition that if health <= 0 then "Health cannot go below 0"

// kept getting undefined answers for 0 and <0, remebered that undefineds can be caused by incorrect returns, this turns out to be the error in my code for this case.
const combat = (health, damage) => {
    if (health - damage > 0) {
        return health-damage;
    }
    else {
        return 0
    }
};

console.log(combat(100,100))

//refactored



const combat =(health, damage) => health - damage < 0 ? 0 : health - damage;