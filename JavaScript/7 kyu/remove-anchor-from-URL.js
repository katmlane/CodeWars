// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

                                                                                        
//                                                                                          assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
//     assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
//     assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
//     })
    
    
    

//  function removeUrlAnchor(url){
//   // TODO: complete
// }


// //resources 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
// https://jelaniharris.com/blog/remove-anchors-from-a-url-in-javascript/


                                                                                        
function removeUrlAnchor(url){
  return url.replace(/#.*/,'')
}
function removeUrlAnchor(url){
  return url.split('#')[0];
}


const removeUrlAnchor = url => url.replace(/#.*/,'')
