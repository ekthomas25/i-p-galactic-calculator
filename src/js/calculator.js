export function calculator(age) {
  let planetArray = [.24, .62, 1.88, 11.86]
  let ageArray =[]

  planetArray.forEach((nums) => {
    ageArray.push((Math.round((age/nums)*100)/100));
});
  return ageArray;
}
