// German music producer Herbert Von Klunkerkunt has been using the same formula to make industrial techno for over twenty years. Producing at 120 beats per minute, each 4-beat bar contains:

// 4 kick drum hits
// 8 hihat hits
// 2 clap hits
// Write a programme that takes the number of minutes and returns the number of "kicks", "hihats" and "claps" Klunkerkunt will need to fill each bar of his new track with percussion in an array. The total number of kicks, hihats and claps should be rounded to the nearest integer.

// function perc (3) {}
// // should return ["360 kicks", "720 hihats", "180 claps"]
// The function should return "invalid track time" if the number of minutes is:

// less than 1
// more than 100
// not a number
// function perc (0.22) {}
// // should return "invalid track time"


// function perc (mins) {};


// This kata requires a lot of math. Since the parameter is minutes I am going to start by determining the amount of each component that will occur. 
// 120 kick drum hits 
// 240 hihat hits 
// 60 clap hits 
// If the user gives any of the following parameters then I will return "invalid track time":
// < 1 
// > 100
// not a Number
// I need to include a conditional that will return that string when the user inputs those values 
// Otherwise I need to return the value of each component at 1 min multiplied by the valid value received from the user.I


const perc = mins => {
    let bPM = [120, 240, 60];
    let kicks;
    let hihats;
    let claps;
    let res= [];

    if (mins >=  1 && mins <= 100 && mins && typeof(mins) === "number") {       
    
       let technoSong = bPM.map((el)=> el* Math.ceil(mins));
       console.log(technoSong)
       kicks = technoSong[0];
       hihats = technoSong[1];
       claps = technoSong[2]; 
       res = [`${kicks} kicks`, `${hihats} hihats`, `${claps} claps`]

    }
    else {
        return "invalid track time";
    };

    return res;
};

console.log(perc(99.9999));

// the kata testing on this seems to be off, discussed by the comments. I think I found a good solution that I could modify with further guidence from the employer.