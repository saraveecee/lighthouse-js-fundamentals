/*
The freezer at Lighthouse Labs is overflowing with Ice Cream so we need to have an ice cream party for all the students so it can be eaten. But before we can do that, we need determine which flavours of ice cream we have, and we'll need to organize them for easy access.

Array of Flavours
We'll start by creating an array of iceCreamFlavours with flavours we've seen so far, then we'll update the array and read from it as we need to.

Create an array of iceCreamFlavours

First, create a new file in your lighthouse-js-fundamentals directory in Vagrant called ice-cream.js.
Then, paste the following code into the file.
// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);


// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...





/*Add a Flavor
Add the flavour "root beer" to the array without modifying the original array. Then console.log the value of the entire array.

After adding "root beer" to the array, remember to console.log the value of the entire array. This way you can view the output in the DevTools console. It also allows Compass to inspect the console and make sure you're doing it right :)

Use the Evaluate button to make sure that particular test passes before moving on to the next step. */

iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);

/*Get the First Flavour
Someone wants the first flavour of ice cream.

console.log the first flavour in the array.

This should come out to be "chocolate". Index it from the array, do not hard-code the value by just doing console.log("chocolate"). */

console.log(iceCreamFlavours[0]);

/*Get the Last Flavour
Someone wants the last flavour of ice cream.

console.log the last flavour in the array

This should come out to be "root beer". Index it from the array, do not hard-code the value by just doing console.log("root beer").

Use the Evaluate button to make sure that particular test passes, and that the previous steps' tests continue to pass as well, before moving on to the next step. */

console.log(iceCreamFlavours[5]);

/*Total Number of Flavours
Someone wants to know how many options there are.

console.log the resulting number of flavours in the array

This should come out to be 6 at that point. Again, do it programatically by asking the array for its size, do not hard-code the value by just doing console.log(6). */

console.log(iceCreamFlavours.length);