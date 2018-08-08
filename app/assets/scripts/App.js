// A CONSTRUCTOR-function
function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + fullName + " and my favorite color is " + favColor + ".");
  }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
