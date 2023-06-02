// Instructions can be found in rest_parameters.md

function add(...args) {
  let sum = 0;
  for (const integer of args) {
    sum += integer;
  }
  return sum;
}

add(1, 2, 3, 4, 5);

module.exports = add;
