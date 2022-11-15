// sayHello is using a ternary operator to check if person is defined.

// If person is defined, it returns a greeting plus the persons name.

// If the person is undefined, it returns "Hello, you"

// Can you shorten this function down using a default parameter?


const sayHello = (person) => {
   return `Hello, ${person === undefined ? "you" : person}`
 }
 
 
 module.exports = sayHello;