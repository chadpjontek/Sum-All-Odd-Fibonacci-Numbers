function sumFibs(num) {
  var result = 1;
  var term;
  var prevTerm = 1;
  var beforePrevTerm = 0;
  while (num >= prevTerm + beforePrevTerm) {
    term = prevTerm + beforePrevTerm;
    if (term % 2 !== 0) {
      result += term;
    }
    beforePrevTerm = prevTerm;
    prevTerm = term;
  }
  return result;
}
// Examples
sumFibs(1); // returns a number
sumFibs(4000000); // returns 4613732
sumFibs(4); // returns 5
sumFibs(75024); // returns 60696
sumFibs(75025); // returns 135721
sumFibs(1000); // returns 1785