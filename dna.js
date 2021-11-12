// DNA
// Difficulty
// Easier

// Concepts
// Conditionals, Arrays, Loops


// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the “instructions” for the development and functioning of living organisms.

// In DNA strings, symbols “A” and “T” are complements of each other, as are “C” and “G”.

// Write a function that takes in a string (one side of the DNA); it should return the other complementary side.

// For example:

// dnaStrand("ATTGC") --> "TAACG"

// dnaStrand("GTAT") --> "CATA"





function dnaStrand(str){
    var arr = [];
    for(var i = 0; i < str.length; i++){
      if(str[i]==="A"){
        arr.push("T")
      }
      else if(str[i]==="T"){
        arr.push("A")
      }
      else if(str[i]==="G"){
        arr.push("C")
      }
      else if(str[i]==="C"){
        arr.push("G")
      }
    }
    return arr.join("");
  }
  
  dnaStrand("GTAT")
  