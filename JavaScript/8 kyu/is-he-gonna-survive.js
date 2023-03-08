
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)


// function hero(bullets, dragons){
//     //Get Coding!
//     }
    





//
//  Parameters
//

//number of bullets
// number of dragons
// will be positive and can be zero

//
//  Returns
//

//true or false 

//
//  Examples
//

//hero(10, 5) //true
//hero(0, 1) //false

//
//  PseudoCode
//

// need to take the number of dragons and mulitply be 2.
// compare # of bullets to dragons * 2 
//return true or false, true if bullets > (dragons* 2), else {false}


let hero = (bullets, dragons) => {
    //number of bullets per dragon needed
    let bulletsForDragons = dragons * 2;
    //check to see if you've used enough bullets for the dragons and gives the user a string
    if (bullets>= bulletsForDragons) {
        console.log("they dead jim")
        return true;
    } else if (bullets < bulletsForDragons) {
        console.log("he's dead jim")
        return false
    }


}


//refactor

let hero = (bullets, dragons) => bullets >=(dragons*2)? true : false;






//standard function 


function hero (bullets, dragons) {
    //number of bullets per dragon needed
    let bulletsForDragons = dragons * 2;
    //check to see if you've used enough bullets for the dragons and gives the user a string
    if (bullets>= bulletsForDragons) {
        console.log("they dead jim")
        return true;
    } else if (bullets < bulletsForDragons) {
        console.log("he's dead jim")
        return false
    }


};



console.log(hero(50, 5))