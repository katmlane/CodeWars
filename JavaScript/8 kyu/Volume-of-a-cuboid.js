// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.



// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       // your code here
//     }
//   }


//
//  Parameters
//

//recieve 3 parameters length, width, height

//
//  Returns
//

//volume = length * width * height

//
//  Examples
//

//(1,2,2) //  4
//(6.3,2,5) //63

//
//  PseudoCode
//


// should  be a simple equation v = l * w * h


class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
  }

// function I would write 
let getVolumeOfCuboid = (length, width, height) => length * width * height;
