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
  
}
