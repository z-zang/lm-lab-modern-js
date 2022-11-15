const sayHello = require('./ternaries');

test('adds 1 + 2 to equal 3', () => {
  expect(sayHello("Jimmy")).toBe("Hello, Jimmy!");
});