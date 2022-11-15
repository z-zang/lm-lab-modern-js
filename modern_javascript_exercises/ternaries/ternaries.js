// sayHello is using an if/else conditional statement.

// Replace the if/else with a ternary operator instead.


function sayHello(name) {
   if (name === undefined) {
    return "Hello you!"
   }
   else return "Hello, " + name + "!"
}


module.exports = sayHello;