const oddCount = n => {
  let counter = 0;
  for (let i =0; i < n; i++){
    if (i%2 != 0) {
      counter++
    }
  }
  return counter
    
}





//simplified way to think about it 


const oddCount = n => Math.floor(n/2) ;

console.log(oddCount(15023))
