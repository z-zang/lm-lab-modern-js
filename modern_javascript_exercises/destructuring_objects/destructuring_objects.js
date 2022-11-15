// Destructuring Objects

// Below you can see a function called introduction which uses object dot notation to access different properties on the 

// person object.

// This is ok - but it's quite long!

// Can you use object destructuring to save a bit of code?

const person = {
    name: 'Ellie',
    city: 'Manchester',
    pet: 'Flick'
}

function introduction(person){;

    const name = person.name;
    const city = person.city;
    const pet = person.pet;

    return "Hello my name is " + name + " and I live in "
 + city + " with " + pet;
}


module.exports = introduction;