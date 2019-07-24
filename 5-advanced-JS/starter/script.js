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
