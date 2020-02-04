//Iterating Over an Array With for

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
/*
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
If we run this code, we can see that the program reminds us to pack all the items in our kitchen. Looking more deeply into the code, this works because we're declaring a counter variable called i (short for "index") that starts at 0, and increments by 1 at every step of a loop until it matches the length of our array, that is packingList. You might remember that to access an item in an array we index it.

(less than "length" because index starts at 0 and will be 1 less than length)
*/

//Iterating Over an Array with while

/*
If we run this code, we can see that the program reminds us to pack all the items in our kitchen. Looking more deeply into the code, this works because we're declaring a counter variable called i (short for "index") that starts at 0, and increments by 1 at every step of a loop until it matches the length of our array, that is packingList. You might remember that to access an item in an array we index it.
*/

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}

//The result here will be exactly the same as before, but we've had to separate out the logic onto a few more lines.

