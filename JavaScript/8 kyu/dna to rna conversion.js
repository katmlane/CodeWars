// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//   }

// function booleanToString(b){
//     //your code here
//   }


//
//  Parameters
//

//a string will be given of any length, including 0/null 

//
//  Returns
//

//goal is to return a "translated string" DNA => RNA
// T is replaced with U, all other letters: G, A, C 

//
//  Examples
//

//"GCAT"  =>  "GCAU"
//"GAACCTCTGATCGATCGATTAGCTAG" => "GAACCUCUGAUCGAUCGAUUAGCUAG"

//
//  PseudoCode
//


//will need to split the string into individual characters to look at each one
//foreach letter, if letter === "T" then it needs to === "U"
//string needs rejoined


// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//   }


//"GCAT"  =>  "GCAU"
//"GAACCTCTGATCGATCGATTAGCTAG" => "GAACCUCUGAUCGAUCGAUUAGCUAG"
//"" => ""

let dna = ""

let DNAtoRNA = dna => {
    
    if (!dna) {

        // console.log("no dna string given")
        // return "no dna string given"


        console.log("")
        return ""


    } else {


        let splitDNA = dna.split("");
        let splitRNA = splitDNA.map(letter=> {
            if (letter === "T"){
                return "U"
            } else if(letter === "G"){
                return "G"
            } else if(letter === "A"){
                return "A"
            } else if(letter === "C"){
                return "C"
            } 
        });


        console.log(splitRNA)
        let rna = splitRNA.join("")
        console.log(rna)
        return rna

    }
    // this was the incorect place to return this and that let rna be undefined
    //console.log(rna)
    // return rna

};

console.log(DNAtoRNA(dna))

//rna is not defined, I tried fixing punctuation first, next the returns, I've console.log() at several locations so I can see where it's broken
// I had infact returned a variable at the wrong place, making rna undefined


// this was a code wars that refactors what I have and is more efficient

// function DNAtoRNA(dna) {
//     return dna.split("T").join("U");
//   }