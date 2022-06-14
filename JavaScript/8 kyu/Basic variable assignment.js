// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

// let a == "code";
// let b == "wa.rs";
// let name == a + b;


//if there is value assignment we only use one "="

// let a = "code";
// let b = "wa.rs";
// let name = a + b;

//because we are using multiple variables to display values I think that this has something to do with concatinating 

let a = "code";
let b = "wa.rs";
let name = `${a}${b}`

console.log(name);
