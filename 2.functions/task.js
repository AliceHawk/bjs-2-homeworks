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
  return max - min;
}

//задание 3
function differenceEvenOddWorker(...arr) {
  let sumEvenElement;
  let sumOddElement;
  let length = arr.length;
  if(length > 0) {
    let EvenElement = arr.filter(function(elem) {
    if (elem % 2 == 0) {
      return true;
    } else {
      return false;
    }
   });

  sumEvenElement = EvenElement.reduce(function (accumulator, EvenElement) {
    return accumulator + EvenElement;
  });


  let OddElement = arr.filter(function(elem) {
    if (elem % 2 != 0) {
      return true;
    } else {
      return false;
    }
  });
  //console.log(OddElement);
  sumOddElement = OddElement.reduce(function (accumulator, OddElement) {
    return accumulator + OddElement;
  });
   } else {
    sumOddElement = 0;
    sumEvenElement = 0;
  };
  return sumEvenElement - sumOddElement;
}

//задание 4
function averageEvenElementsWorker(...arr) {
  let length = arr.length;
  if(length > 0) {
  
    } else {
    OddElement = 0;
    EvenElement = 0;
    }
}

//задача 3

function makeWork (arrOfArr, func) {

}
