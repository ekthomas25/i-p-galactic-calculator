import { venus } from './../src/js/venus.js'

describe('venus', () => {

  test('should return the inputted age divided by .64 rounded to the nearest two decimal', () => {
    expect(venus(20)).toEqual(31.25);
  });
});