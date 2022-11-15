// tbc

// potentially have a failing test that fails because the function is using var and there is a scoping issue

// learner needs to replace the consts with let

// need to demonstrate difference between the three

var tester = "hey hi";

function newFunction() {
  var hello = "hello";
  return hello;
}
// console.log(hello); // error: greeting is not defined

//*********************************

var message = "hey hi";
var times = 5;

if (times > 4) {
  var message = "say Hello instead";
}

// console.log(messasge); // "say Hello instead"

//*********************************

// const greeting = "say Hi";
// greeting = "say Hello instead";
// console.log(greeting);
