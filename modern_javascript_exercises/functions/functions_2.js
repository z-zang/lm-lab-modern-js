// Hoisting

// Function Declarations ⭐️
​
const people = ["Heather", "Barry", "John", "Maria"];​

function logPerson(person) {​
  console.log("The person is " + person);​
}
​
people.forEach(logPerson);


// If we move the people.forEach(logPerson) above function logPerson (but below const people) 

// Our function still works and this is because our function gets hoisted so we can use our our function before its declared.

// This is slightly different from other types of functions


// Functions as a Value ⭐️

const pets = ["Twinkle", "Toby", "Mr Snuggles", "Hissy McGee"];​

const logPet = function(pet) {​
  console.log("The pet is " + pet);​
}
​
pets.forEach(logPet);

// This is doing the same as the code before but we are storing our function in a variable

// When we do this it’s called a “Function as a Value”

// These are not hoisted