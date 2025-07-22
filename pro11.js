let sumDigitNum = 1234;
let digitSum = 0;
let strDigits = sumDigitNum.toString();
for (let i = 0; i < strDigits.length; i++) 
{
  digitSum += parseInt(strDigits[i]);
}
console.log("Sum of digits:", digitSum);