import { calculator } from './../src/js/calculator'

describe('calculator', () => {

  test('should iterate through an array and return a new array', () => {
    expect(calculator()).toEqual([.24, .62, 1.88, 11.86]);
  });
});