let x = 20, y = 28;
let gcd;
for (let i = 1; i <= Math.min(x, y); i++) {
  if (x % i === 0 && y % i === 0) {
    gcd = i;
  }
}
console.log("GCD:", gcd);