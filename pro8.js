let palNum = 121;
let palStr = palNum.toString();
let isPal = palStr === palStr.split('').reverse().join('');
console.log(isPal ? "Palindrome" : "Not Palindrome");