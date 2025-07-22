let perfectNum = 28;
let divSum = 0;
for (let i = 1; i < perfectNum; i++) 
{
  if (perfectNum % i === 0) 
  {
    divSum += i;
  }
}
console.log(divSum === perfectNum ? "Perfect" : "Not Perfect")