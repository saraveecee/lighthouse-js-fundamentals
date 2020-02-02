const isEven = function (num) {
  return num % === 0;
}

//return statement:

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

/*
We can simplify our above code a little by learning that we don't need to set our function return values to new variables before doing something with them–we can use them directly where we need them.

const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

This will produce the same result as our previous example. There are a couple things to understand here. First, console.log is itself a function–only it's pre-defined by JavaScript and we can use it without having to declare it ourselves. Second, we can pass the result returned by isEven directly to console.log, which takes that value and outputs it to Terminal.
*/