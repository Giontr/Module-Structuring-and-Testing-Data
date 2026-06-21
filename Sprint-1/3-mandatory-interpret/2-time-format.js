const movieLength = -20; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6

// b) How many function calls are there?
// 0

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/* It first coerces both operands to numeric values and tests the types of them. It performs BigInt remainder if both operands become BigInts; otherwise, it performs number remainder.
*/
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// it calculates total minutes of movie without counting last 24 second

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// variable result represents total length of movie in H:M:S format, so I'd prefer variable name to be totalLength

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// yes it will work even for negative numbers.
