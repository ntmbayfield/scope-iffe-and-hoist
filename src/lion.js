var sound = 'ROAR!'

// Only change Line 4
function lion (growl) {
  return 'The lion goes, "' + sound + '"'
}

module.exports = lion('Meow...')

//replaced sound parameter with growl because sound was shadowing the global variable
