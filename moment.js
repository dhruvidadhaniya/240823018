const moment=require('moment');
console.log(moment().format("DD-MM-YY HH:MM"));
console.log(moment().add(7,"days").format("DD-MM-YYYY HH:MM"));