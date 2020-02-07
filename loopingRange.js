/*
Creating a long array of repeating numbers can be a time consuming task. Imagine creating an array of every even number from 0 to 100. In this challenge, we will build a function that creates an array like this for a given start, end, and step parameter.

The function takes 3 integer parameters: start, end, and step.
The function should return an array of numbers from start to end counting by step.
For example:

code	            output
range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);	[ -5, -2, 1 ]
The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative

Hints
At some point in your code, you may want to use some_array.push(some_value)
You may paste the following code after your function definition to help you verify it works correctly:
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
*/



function range(start, end, step) {
  let array = [];
  if (end < start || start > end || step <= 0) {
    return array;
  } else {
    for (var i = start; i <= end; i = i + step) {
      array.push(i);
    }
  }
  return array;
}
console.log(range(-9, 3, 3));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));