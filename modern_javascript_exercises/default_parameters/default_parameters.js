// Instructions can be found in default_parameters.md

const sayHello = (person) => {
  return `Hello, ${person === undefined ? "you!" : person + "!"}`;
};

module.exports = sayHello;
