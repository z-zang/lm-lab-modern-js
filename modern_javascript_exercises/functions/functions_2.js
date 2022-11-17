// Instructions to this exercise can be found in functions_2.md

// Function Declarations ⭐️
​
const people = ["Heather", "Barry", "John", "Maria"];​

function logPerson(person) {​
  console.log("The person is " + person);​
}

people.forEach(logPerson);





// Functions as a Value ⭐️

const pets = ["Twinkle", "Toby", "Mr Snuggles", "Hissy McGee"];​

const logPet = function(pet) {​
  console.log("The pet is " + pet);​
}

pets.forEach(logPet);


