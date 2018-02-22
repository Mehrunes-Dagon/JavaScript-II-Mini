// // to test these problems you can run 'node recursion.js' in your terminal
// // Problem 1:

// let n = 1;
// while (n <= 10) {
//   console.log('While Loop', n);
//   n++;
// }

// // write a recursive - function called countToTen that mimics the while loop above.

// // code here

// // when you code is ready, un-comment the next line and run the file
// // console.log(countToTen());
// /* ================ Next Problem ================= */

// // Problem 2:

// const factorial = n => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// };

// console.log(factorial(5));

// write the above function in a recursive way.
const factorDis = (n) => {
  if (n === 0) return 1;
  console.log(n);
  return n * factorDis(n - 1);
};
// when your code is ready, un-comment the next line and run the file
console.log(factorDis(0));
