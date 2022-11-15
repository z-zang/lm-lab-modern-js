// tbc

// potentially have a failing test that fails because the function is using var and there is a scoping issue

// learner needs to replace the consts with let

// need to demonstrate difference between the three

var tester = "hey hi";

function newFunction() {
  var hello = "hello";
}
console.log(hello); // error: hello is not defined

//*********************************

var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead"
