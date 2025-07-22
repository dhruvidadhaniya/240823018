let primeNum = 11;
let isPrime = true;
if (primeNum <= 1) isPrime = false;
for (let i = 2; i <= Math.sqrt(primeNum); i++) 
{
  if (primeNum % i === 0) 
  {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "Prime" : "Not Prime");