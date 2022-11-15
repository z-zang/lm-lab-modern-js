// Rest Parameters

// The add function below adds two numbers together.

// This is fine.. but what if we wanted to add any number of arguments?

// If you run this file using:

// node rest_operator.js

// Note: Make sure you're in the right file when running this command! You will also need to console.log your function to

// see any output.

// You'll notice that numbers 3, 4 and 5 aren't getting passed into the function, which isn't ideal.

// Using Rest Parameters and some kind of forLoop (your choice!), refactor this function so that it can add together

// any number of arguments and fix the failing tests.

function add(a, b) {
  // Add a loop here
  return a + b;
}

add(1, 2, 3, 4, 5);

module.exports = add;
