// Yikes, this code doesn't work at all. Make as few changes as possible
// to the below code to get the correct statement to return.

//Solution1:
let penguin = function(name) {
    return 'Hello, my name is ' + name;
  }

//Solution2:
// var penguin = function (name) {
//   return (function speak () {
//     return 'Hello, my name is ' + name
//   })();
// }

module.exports = penguin

//the problem here is that since penguin is a function expression instead of a function declaration, it can't be called before it's been declared like one would be able to do with a function declaration.  Could also have fixed the exercise by turning speak into an immediately invoked function and calling it


//ORIGINAL CODE FROM EXERCISE THAT DOESN'T WORK:
// Yikes, this code doesn't work at all. Make as few changes as possible
// to the below code to get the correct statement to return.

 // var penguin = function (name) {
 //   return penguin()
 //   var penguin = (function speak () {
 //     return 'Hello, my name is ' + name
 //   })
 // }
