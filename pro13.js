let fibCount = 10;
let fib1 = 0, fib2 = 1;
let fibSeries = `${fib1} ${fib2}`;
for (let i = 2; i < fibCount; i++) 
{
  let next = fib1 + fib2;
  fibSeries += ` ${next}`;
  fib1 = fib2;
  fib2 = next;
}
console.log("Fibonacci:", fibSeries);