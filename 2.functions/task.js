function getArrayParams(...arr) {
  let min = Math.min(...arr);
  console.log(min);
  let max = Math.max(...arr);
  console.log(max);
  let sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  console.log(sum);
  let length = arr.length;
  let avg = Number((sum / length).toFixed(2));
  console.log(avg);

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  if(arr.length > 0) {
    let sum = arr.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    return sum;
   }
}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
