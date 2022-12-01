const month = require('./index.js');

describe(`test month`, () => {
  it('adds 1 to equal январь', () => {
    const result = month(1);
    expect(result).toBe(`январь`);
});
  it('adds 3 to equal март', () => {
    const result = month(3);
    expect(result).toBe(`март`);
  });
  it('adds 12 to equal декабрь', () => {
    const result = month(12);
    expect(result).toBe(`декабрь`);
  });

});