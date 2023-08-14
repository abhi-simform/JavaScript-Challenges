// Challenge 01 Template Literals

// Using the below variables in a template literal make a string 'Today's date is 23rd July 2023, temprature today will be 32 Celcius and weather will be Cloudy'

const day = "23rd July 2023";
const temprature = "32 Celcius";
const weather = "Cloudy";

console.log(
  `Today's date is ${day}, temprature today will be ${temprature} and weather will be ${weather}`
);

// Now instead of using static variables use a make a function that accepts day, temprature and weather as parameters and print the same string using a function

const date = new Date();
let currentDay = date.toDateString().slice(4);

function printString(day, temprature, weather) {
  console.log(
    `Today's date is ${day}, temprature today will be ${temprature} and weather will be ${weather}`
  );
}

printString(currentDay, temprature, weather);

// Bonus challenge: Instead entering the date manually use the JavaScript Date Object (MDN LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to get the date and pass it to the function.
