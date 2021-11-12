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
  });
  
  test('should return an object with the values of age, expectancy, planetAge, planetExpect, and years left for the planet mercury', () => {
    newPlanet.mercury();
    newPlanet.yearsRemain();
    expect(newPlanet.age).toEqual(20);
    expect(newPlanet.expectancy).toEqual(50);
    expect(newPlanet.planetAge).toEqual(83.33);
    expect(newPlanet.planetExpect).toEqual(208.33);
    expect(newPlanet.yearsLeft).toEqual(125);
  });
  
  test('should return an object with the values of age, expectancy, planetAge, and planetExpect for the planet venus', () => {
    newPlanet.venus();
    expect(newPlanet.age).toEqual(20);
    expect(newPlanet.expectancy).toEqual(50);
    expect(newPlanet.planetAge).toEqual(32.26);
    expect(newPlanet.planetExpect).toEqual(80.65);
  });

  test('should return an object with the values of age, expectancy, planetAge, planetExpect, and yearsLeft for the planet venus', () => {
    newPlanet.venus();
    newPlanet.yearsRemain();
    expect(newPlanet.age).toEqual(20);
    expect(newPlanet.expectancy).toEqual(50);
    expect(newPlanet.planetAge).toEqual(32.26);
    expect(newPlanet.planetExpect).toEqual(80.65);
    expect(newPlanet.yearsLeft).toEqual(48.39);
  });

  test('should return an object with the values of age, expectancy, planetAge, planetExpect, and yearsLeft for the planet mars', () => {
    newPlanet.mars();
    newPlanet.yearsRemain();
    expect(newPlanet.age).toEqual(20);
    expect(newPlanet.expectancy).toEqual(50);
    expect(newPlanet.planetAge).toEqual(10.64);
    expect(newPlanet.planetExpect).toEqual(26.6);
    expect(newPlanet.yearsLeft).toEqual(15.96);
  });

  test('should return an object with the values of age, expectancy, planetAge, planetExpect, and yearsLeft for the planet jupiter', () => {
    newPlanet.jupiter();
    newPlanet.yearsRemain();
    expect(newPlanet.age).toEqual(20);
    expect(newPlanet.expectancy).toEqual(50);
    expect(newPlanet.planetAge).toEqual(1.69);
    expect(newPlanet.planetExpect).toEqual(4.22);
    expect(newPlanet.yearsLeft).toEqual(2.53);
  });

});