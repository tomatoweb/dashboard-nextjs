// Returns initials from string
// e.g. "Application has been approved 🚀" --->  "Ahba�"

// this is an example of use     of reduce()
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial); // Expected output: 10


export const getInitials = string => string.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), '')
