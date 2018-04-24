var result = (function (theRestOfThePhrase) {
  var goodbye = 'Bye Buddy! '
  return goodbye + theRestOfThePhrase
  // Only change Line 5
})("Hope you find your Dad!") // Take a look at the test to see what needs to be added here!

module.exports = result

//This time we're dealing with an anonymous function thats an IIFE. and when we immediately invoke it we need to specify the rest of the phrase as its parameter
