//задача 1

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

//задача 2

//задание 1
function summElementsWorker(...arr) {
  let sum;
  let length = arr.length;
   
  if(length <= 0){
    sum = 0;
  } else {
    sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
}
  return sum;
}

//задание 2
function differenceMaxMinWorker(...arr) {
  let min;
  let max;
  let length = arr.length;
  if(length > 0) {
    min = Math.min(...arr);
    console.log(min);
    max = Math.max(...arr);
    console.log(max);
   } else {
    max = 0;
    min = 0;
  };
  return {max: max, min: min};
}

//задание 3
function differenceEvenOddWorker(...arr) {
  if(arr.length > 0) {
  
    return min;
    }
}

//задание 4
function averageEvenElementsWorker(...arr) {
  if(arr.length > 0) {
  
    return max;
    }
}

//задача 3

function makeWork (arrOfArr, func) {

}
