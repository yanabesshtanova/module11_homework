const month = require('./index.js');

test('adds 1 to equa январь', () => {
  expect(month(1)).toBe(`январь`);
});