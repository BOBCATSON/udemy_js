// var john = {
//   name: 'John',
//   yearOfBirth: 1990;,
//   job: 'teacher'
// }

//constructor functions should be capitalised
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person.prototype.calculateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// }
//
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 2001, 'student');
// var shamus = new Person('Shamus', 1983, 'Park ranger');
//
//
// john.calculateAge();
// jane.calculateAge();
// shamus.calculateAge();


//Object.create
var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1955;
john.job = 'Teacher';

var jane = Object.creat(personProto,
{
  name: { value: 'Jane' },
  yearOfBirth: { value: 2001 },
  job: { value: 'Stripper' },
})
