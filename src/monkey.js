function monkey () {
  var phrase = ''

  // Only change the lines inside of the following functions
  // Lines 7, 11, and 15
  function seeNoEvil (text) {
    phrase = phrase + 'See No Evil; '
  }

  function hearNoEvil (text) {
    phrase = phrase + 'Hear No Evil; '
  }

  function speakNoEvil (text) {
    phrase = phrase + 'Speak No Evil.'
  }

  seeNoEvil()
  hearNoEvil()
  speakNoEvil()

  return phrase
}

module.exports = monkey()

//removed var from in front of phrase inside of each of the functions because we were creating a new variable each time instead of updating the original global phrase variable declared at the start of monkey
