export class Calculator {
  constructor(age, expectancy, planetAge, planetExpect, yearsLeft) {
    this.age = age;
    this.expectancy = expectancy;
    this.planetAge = planetAge;
    this.planetExpect = planetExpect;
    this.yearsLeft = yearsLeft;
  }

  mercury() {
    this.planetAge = Math.round((this.age/.24)*100)/100;
    this.planetExpect = Math.round((this.expectancy/.24)*100)/100;
  }

  venus() {
    this.planetAge = Math.round((this.age/.62)*100)/100;
    this.planetExpect = Math.round((this.expectancy/.62)*100)/100;
  }

  mars() {
    
  }

  yearsRemain() {
    this.yearsLeft = Math.round((this.planetExpect - this.planetAge)*100)/100
  }
}