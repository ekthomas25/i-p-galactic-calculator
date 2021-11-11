import { calculator } from './../src/js/mars.js'

describe('calculator', () => {

  test('should iterate through an array and return a new array', () => {
    expect(calculator()).toEqual([.24, .62, 1.88, 11.86]);
  });
});