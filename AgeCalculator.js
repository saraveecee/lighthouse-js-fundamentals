/*
We've been given access to a database that contains all of the users for the PlentyOfDevs dating site. This database contains every user's date of birth, but users have complained about having to figure out someone's age using just their date of birth. In this challenge, we will write a function that determines someone's age, given their date of birth.

Challenge
Create a function to determine someone's age.

Define a function called ageCalculator. This function should take 3 parameters:

name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year
The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows.

return != console.log
console.log is great for debugging and inspecting code by printing values to the terminal and is mostly used for this purpose. However, most functions are designed to return a computed value to the caller instead of printing it to the terminal.

You should therefore carefully read for whether you need to return or log in your function.

"Suzie is 32 years old."
Tips
You may paste the following code after your function definition to help you verify it works correctly.
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/

function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));