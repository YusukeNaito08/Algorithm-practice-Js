/*  FizzBuzz
 */

// function fizzBuzz ()  {
//   for (let i = 1; i <= 30; i++) {
//     // if (i % 3 === 0 && i % 5 === 0) {
//     //   console.log("fizbuzz");
//     // } else if (i % 3 === 0) {
//     //   console.log( "fizz");
//     // } else if (i % 5 === 0) {
//     //   console.log("buzz");
//     // } else {
//     //   console.log(i);
//     // }

//     console.log(
//       i % 3 === 0 && i % 5 === 0 ? "Fizzbuzz" :
//       i % 3 === 0 ? "Fizz":
//       i % 5 === 0 ? "Buzz":
//       i)
//   }
// }
// fizzBuzz();

/* Fibonacchi -1
 */
const number = 10;
console.log(number + ":" + fibonaccci(number));

function fibonaccci(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  let fibo = 0;
  let fibo_0 = 0;
  let fibo_1 = 1;

  for (let i = 1; i < num; i++) {
    fibo = fibo_0 + fibo_1;
    fibo_0 = fibo_1;
    fibo_1 = fibo;
  }

  return fibo;
}
