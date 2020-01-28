/* The logic should help learners decide which school they should attend. Replace the comment inside the function with your code.

The function returns one of the following strings, based on the value of age:

Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases.
Comments in JavaScript
Writing good, conventional code goes a long way in keeping our programs clear and understandable, but sometimes it's useful to explain pieces of it in plain old English (or any other language, really). We can do that with comments.


Tips
Work incrementally, by writing and testing each scenario individually, instead of writing out the entire logic.
Use the automatic test results (when you click Evaluate) to do your testing. Combine that with the console.log approach if/as needed
That said, you can also add console.log statements outside (below) the function definition to call the function and see what it returns. Example code below:
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
It's very important to understand and keep in mind that console.log is for developers to keep an eye on what's going on. It is not the same as return, which is how the function responds with the correct value.

In the code snippet above, we are using them together. We are calling the whichSchool function inside the the console.log function. The whichSchool function does its calculation and returns the value back to us which the log function then outputs to the console for us to see.

The console.log code above is therefore not required for getting this exercise to PASS successfully. It's just for developers to keep an eye on what's going on.

Submit your code. */

const whichSchool  = function (age) {
  // Your code in here ...
   if (age < 13) {
     return "Elementary School";
   } else if (age >= 13 && age <= 18) {
     return "Secondary School";
   } else {
     return "Lighthouse Labs";
   }
 }
 whichSchool(2);