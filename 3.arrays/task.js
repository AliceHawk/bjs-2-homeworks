 /* let result = arr1.toString() === arr2.toString();
  return result;*/

  function compareArrays(arr1, arr2) {
   return arr1.every(function(elem, index){
      return elem === arr2[index];
   });
}


function getUsersNamesInAgeRange(users, gender) {
  
}
