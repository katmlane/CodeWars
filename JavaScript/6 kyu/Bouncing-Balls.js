// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).


// function bouncingBall(h,  bounce,  window) {
//   // your code here
// }

//
//Parameters
//

//Given the height of floor = h, must be greater than 0
//bounce = b, must be greater than 0 and less than 1
//"window" where mom looks out = w, must be less than h 
//ball can only bee seen if the h is > (not equal too) the window parameter

//
//Return
//

//If all three conditions above are fulfilled, return a positive integer equal to number of times ball is seen by mom
// If any parameters not met, return -1

//
//Examples
//

// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 // bounce is = to 1 and needs to be b > 0 and b < 1 

// (Condition 2) not fulfilled).

//
//Pseudocode
//

// need to make sure all parameters are acceptable, if not return -1 
// if parameters are acceptable, need to do math to see how many times the ball is seen
// counter starts at 1 because ball drops past mom on the way down
// h * b = new h, if new h is > than window, counter = 3, can assume mom will see ball on the way down from new h
// new h * b = newH2, if new h is > than window, counter = 5
//if new h * b < window, then end math and return number
// use loop for math and conditional to break loop?





let bouncingBall = (h, bounce, window) => {
  // used to qualify the condition that shouldn't occur
  let cond = (h <= 0 || (bounce >= 1 || bounce <= 0) || h <= window);
  if(cond) {
    return -1;
  } else {
    // will resolve all correct parameters
    return 2 + bouncingBall((h* bounce), bounce, window);
  }
  
};





// after getting stuck I looked for some help online and found this article 
//https://anothercodingblog.com/2020/02/27/daily-coding-challenge-bouncing-balls-and-recursion-written-in-javascript-python-and-java/

//to refactor 

let bouncingBall = (h, bounce, window) => {
  // establishinig the correct parameters that are to be met 
  let cond = (h > 0 && (bounce < 1 && bounce > 0) && h > window);
  if(cond) {
    console.log((h * bounce), bounce, window)
    // if the condition is not met, -1 if true then call the function
    return h < window ? -1 : 2 + bouncingBall((h* bounce), bounce, window);
  } else {
    // resolves all other cases.
    console.log("womp")
    return -1
  }
  
}

console.log(bouncingBall(30, .75, 1.5)) // 21

// irealized that they had addressed the codewars by the conditions that need met versus me excluding incorrect parameters and then proceeding to pass the parameters if they do
// I figured there might be some cases when I would like to return it as -1
// after running my answer through codepen, I realized that my code was problematic when addressing the conditions. 
// I coreccted my operators to include the correct "unacceptable parameters"
