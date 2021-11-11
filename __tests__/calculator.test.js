import { calculator } from './../src/js/calculator'

describe('calculator', () => {

  test('should iterate through an array and return a new array', () => {
    expect(calculator()).toEqual([.24, .62, 1.88, 11.86]);
  });
  
  test('should divide the argument by each array element and return a new array with integers rounded to the second decimal point', () => {
    expect(calculator(20)).toEqual([83.33, 32.26, 10.64, 1.69]);
  });
});