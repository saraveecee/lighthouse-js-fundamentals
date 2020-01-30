
//if statements
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//if, else if, else
const temperature = -1;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//logical operators: &&, ||, !

// && AND
const isCitizen = true;
const age = 26;

if (isCitizen && >18) {
  console.log("You are eligible to vote.");
}

// || OR
if (temperature > -40 || temperature >40) {
  console.log("Maybe going outside isn't such a great idea...");
}

// ! NOT
if (!raining) {
  console.log("Leave your umbrella at home!");
}
