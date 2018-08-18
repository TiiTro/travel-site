var $ = require('jquery');
// var Person = require('./modules/Person');
//ES6 version of require:
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}

//alert("ABC 321");

var john = new Person("John Doe", "blue");
john.greet();


var jane = new Adult("Jane Smith", "violet");
jane.greet();
jane.payTaxes();
