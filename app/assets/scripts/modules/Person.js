// A CONSTRUCTOR-function
function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + fullName + " and my favorite color is " + favColor + ".");
  }
}

module.exports = Person;
