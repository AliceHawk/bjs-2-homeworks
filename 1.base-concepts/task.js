"use strict";
function solveEquation(a, b, c) {
  let d = b**2 - 4 * a * c;
  let arr = [];
  if (d < 0) {
  } else if (d == 0) {
    let x = -b/(2*a);
    arr.push(x);
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 /* if (typeof percent == string) {
    
  }*/
  
  percent = percent / 100 / 12;
  let body = amount - contribution;
  let monthlyPayment =  body * (percent + (percent / (((1 + P)**countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  
  return totalAmount.toFixed(2);
}
