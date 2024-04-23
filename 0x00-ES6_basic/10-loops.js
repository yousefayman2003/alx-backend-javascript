export default function appendToEachArrayValue(array, appendString) {
  const sol = [];
  for (const value of array) {
    sol.push(`${appendString + value}`);
  }

  return sol;
}
