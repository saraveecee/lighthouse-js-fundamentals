const sayHello = function () {
  console.log("Hello, world");
}
sayHello()

const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Sara")

/*
Now we've got a function taking a value as its input, which we've referred to as name and which we concatenate to the string "Hello, " before we output the whole result. The input to the function is called a parameter, in our case we've called it name. We can think of a function's parameters as variables that are accessible and can be used only within the function, and whose values vary and are set when we call the function.
*/