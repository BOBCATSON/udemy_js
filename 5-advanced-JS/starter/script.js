//HOW TO PASS FUNCTIONS TO
//array
var years = [1990, 1965, 1937, 2005, 1998];

//basic function
function arrayCalc(arr, fn) {
  var arrResult = [];
  for(var i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

//s=maller functions to be used inside out basic arrayCalc function
function isFullAge(el) {
  return el >= 18;
}

function calculateAge(el) {
  return 2019 - el;
}

function maxHeartRate(el) {
  if( el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }

}

//this is how we pass smaller functions as arguments to out arrayCalc function
var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var heartAge = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(heartAge);




//Closures

function retirement(retirementAge) {
  var a = ' years left until retirment.';
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log((retirementAge - age ) + a );
  }
}

var retirementUK = retirement(65);
var retirementUS = retirement(66);
var retirementGermany = retirement(65);


retirementUK(1984);
retirementUS(1990);
retirementGermany(1988);

retirement(68)(1984);


//rewrite interview function to use Closures

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log('Hello ' + name + ', can you explain UX?');
    } else if (job === 'teacher') {
      console.log('Hello ' + name + ', what subject do you teach?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestion('designer')('Tom');
interviewQuestion('teacher')('Terry');
interviewQuestion('unemployed')('Leroy');
