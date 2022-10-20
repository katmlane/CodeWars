Write a function that returns the total surface area and volume of a box as an array: [area, volume]



function getSize(width, height, depth)



//surface area (SA)=2lw+2lh+2hw
//volume = w * L * h 

const getSize = (width, height, depth) => {
let sArea, volume;
  let ansArr = [];
  sArea = 2*width*depth + 2*depth*height + 2*height*width;
  volume = width*depth*height
  ansArr.push(sArea);
  ansArr.push(volume);
  return ansArr
}







//codewars answer that I would like to refactor and look into. Has to do with breaking down functions into their smallest part and calling upon them. 
