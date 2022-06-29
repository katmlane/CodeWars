// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// function DNAStrand(dna){
//   //your code here
// }


//parameters

// string containing A, T, G, C in any combination

//returns

// string containing the compliment dna strand 

//examples

// console.log(DNAStrand("AAAA")) // "TTTT"
//console.log(DNAStrand("ATTGC")) // "TAACG"
//console.log(DNAStrand("GTAT")) // "CATA"

// pseudo code

// need loop to iterate through letters
//I think for me the best way is to make an array that the letters are pushed to using conditional


const DNAStrand = dna => {
  // array to hold rna
  let dna2 = [];
  //iteration 
  for (let i=0; i < dna.length; i++) {
    
    // conditional 
    if (dna[i] === "A") {
      dna2.push("T");
    }
    else if (dna[i] === "C") {
      dna2.push("G");     
    }
    else if (dna[i] === "G") {
      dna2.push("C");     
    }
    else if (dna[i] === "T") {
      dna2.push("A");     
    }
    
  }
  // have to modify array to be string
  return dna2.toString("").split(",").join("");
}

console.log(DNAStrand("AAAA"))
