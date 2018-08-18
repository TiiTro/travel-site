// A CONSTRUCTOR-function
class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("ES6 hellos to all, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

//module.exports = Person; is the ES5 way of exporting
// ES6 way of exporting:

export default Person;
