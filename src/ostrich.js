function ostrich () {
  runAway()
  stickHeadInSand()

  // Only change lines 6 and 10
  function runAway() {
    console.log('The ostrich is running away...')
  }

  function stickHeadInSand() {
    console.log('Ostriches actually do not do this.')
  }
}

module.exports = ostrich

//changed line 6 and 10 so that var runAway and var stickInTheSand were no longer variables equal to the sprovided anonymous functions.  Because functions expressions do not get hoisted to the top of the function or global scope in javascript in the same way that function declarations are
