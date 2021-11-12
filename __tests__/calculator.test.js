import { Calculator, calculator } from './../src/js/calculator'

describe('calculator', () => {
  
  let newPlanet;
  
  beforeEach(() => {
    newPlanet = new Calculator(20, 50)
  });

  test('should return an object with the values of age, expectancy', () => {
    expect(newPlanet.age).toEqual(20);
    expect(newPlanet.expectancy).toEqual(50);
  });

  test('should return an object with the values of age, expectancy, planetAge, and planetExpect for the planet mercury', () => {
    newPlanet.mercury();
    expect(newPlanet.age).toEqual(20);
    expect(newPlanet.expectancy).toEqual(50);
    expect(newPlanet.planetAge).toEqual(83.33);
    expect(newPlanet.planetExpect).toEqual(208.33);
  })
  
});