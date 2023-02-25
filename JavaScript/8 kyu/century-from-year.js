// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


// function century(year) {
//     // Finish this :)
//     return;
//   }


// at first I was going to write one long conditional for each century but then I realized that it would be too much code to do it that way
// to simplify the code I decided I should check the last number in the num/str to see if it is 0 or !
// if 0 then century could be calculated by year / 100 
// if !0 then century could be calculated by year/ 100 + 1

// to check the last number I wanted to check the index of the year.split("") at [3] this wouldn't work for year < 1000


//I then realized that I could solve this problem by looking at the yearArr[-1]


// after that I realized that I would need to take off the 2 end numbers instead of year/100






//Pages used
//https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l
//A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence. 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


let century = year => {
    let yearNum = year.toString()
    let yearSlice = yearNum.slice(-2)
    let centurySlice = yearNum.slice(0,-2)
  if (yearSlice == "00") {
      console.log(Number(centurySlice))
      return Number(centurySlice)
  } else {
    console.log(Number(centurySlice) + 1)
    return Number(centurySlice) + 1
  }
}

console.log(century(820))


//other solutions that are even simpler

function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }

  let century = year => Math.ceil(year/100)