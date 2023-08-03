// Challenge 01 Template Literals

// Using the below variables in a template literal make a string 'Today's date is 23rd July 2023, temprature today will be 32 Celcius and weather will be Cloudy'

const d = '23rd July 2023';
const t = '32 Celcius';
const w = 'Cloudy';

console.log(`Today's date is ${d}, temprature today will be ${t} and weather will be ${w}.`);

// Now instead of using static variables use a make a function that accepts day, temprature and weather as parameters and print the same string using a function

function printString(d, t, w) {
  console.log(`Today's date is ${d}, temprature today will be ${t} and weather will be ${w}.`);
}

printString('22 April 1998', '28 Celcius', 'Sunny');

// Bonus challenge: Instead entering the date manually use the JavaScript Date Object (MDN LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to get the date and pass it to the function.

function bonusChallenge() {
  const todayDate = new Date();
  console.log(`Today's date is ${todayDate}.`);
}
bonusChallenge();