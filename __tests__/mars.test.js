import { mars } from './../src/js/mars'

describe('mars', () => {

  test('should return the inputted age divided by 1.88 rounded to the nearest two decimal', () => {
    expect(mars(20)).toEqual(10.64);
  });
});