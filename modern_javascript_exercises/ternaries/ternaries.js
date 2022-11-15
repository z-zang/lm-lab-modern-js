// Instructions can be found in ternaries.md

function sayHello(name) {
  if (name === undefined) {
    return "Hello you!";
  } else return "Hello, " + name + "!";
}

module.exports = sayHello;
