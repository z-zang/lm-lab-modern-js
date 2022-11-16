// Instructions can be found in const_vs_let.md

const count = 0;

let people = ["Barbara", "Jacob", "Angela", "Brangela"];

function countThePeople() {
  people.forEach(() => (count += 1));
}

countThePeople();

// console.log(count); // <---- uncomment me!
