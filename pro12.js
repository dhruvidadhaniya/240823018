let armNum = 1532;
let digits = armNum.toString().split('');
let power = digits.length;
let armSum = 0;
for (let d of digits) 
{
  armSum += Math.pow(parseInt(d), power);
}
console.log(armSum === armNum ? "Armstrong" : "Not Armstrong")