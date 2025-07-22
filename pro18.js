let divNum = 100;
let divisors = '';
for (let i = 1; i <= divNum; i++) {
  if (divNum % i === 0) {
    divisors += i + ' ';
  }
}
console.log("Divisors:", divisors);