//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F

//resources

//https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript

//array


function abbrevName(name){
    const stringArray = name.split(" ")
    return (stringArray[0][0] + "." + stringArray[1][0]).toUpperCase()
 }


 let abbrevName = name => (name.split(' ')[0][0] + "." + name.split(' ')[1][0]).toUpperCase();



 //map


 function abbrevName(name){
    let stringArray = name.split(" ")
    return stringArray.map(x => x[0].toUpperCase()).join(".")
 }

 let abbrevName = name => name.split(' ').map(x => x[0].toUpperCase()).join('.');





console.log(abbrevName("Kat Lane"))
