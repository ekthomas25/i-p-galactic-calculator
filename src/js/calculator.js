export function calculator(age) {
  let planetArray = [.24, .62, 1.88, 11.86]
  let ageArray =[]

  planetArray.forEach((nums) => {
    ageArray.push((Math.round((nums)*100)/100));
});
  return ageArray;
}
