describe('mercury', () => {

  test('should return the inputted age divided by .24 rounded to the nearest integer', () => {
    expect(mercury(20)).toEqual(83);
  });
});