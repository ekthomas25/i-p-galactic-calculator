

describe('venus', () => {

  test('should return the inputted age divided by .64 rounded to the nearest two decimal points', () => {
    expect(venus(20)).toEqual(31.25);
  });
});