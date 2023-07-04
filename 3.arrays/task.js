 /* let result = arr1.toString() === arr2.toString();
  return result;*/

function compareArrays(arr1, arr2) {
  if(arr1.length != arr2.length) {
    return false;
  }
   return arr1.every(function(elem, index){
      return elem === arr2[index];
   });
}

function getUsersNamesInAgeRange(users, gender) {
        if (users.length === 0) {
            return 0;
        };
        const filteredUsers = people.filter(function(user){
            return user.gender === gender;
        });
        let ages = filteredUsers.map(function(user){
            return user.age;
        });
        if (ages.length === 0) {
            return 0;
        };
        let agesSum = ages.reduce(function(accumulator, age) {
            return accumulator + age;
        }, 0);
        return agesSum / ages.length;
    }
