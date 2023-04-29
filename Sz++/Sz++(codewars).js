//https://www.codewars.com/kata/l1-set-alarm/train/javascript

function setAlarm(employed, vacation){
    if (employed == true && vacation == false)
      return true;
    return false;
}

https://www.codewars.com/kata/how-old-will-i-be-in-2099/train/javascript

function  calculateAge(yearOfBirth,yearToCount) {
  
    // enter your code here.
      let count = 0;
    if (yearOfBirth === yearToCount) {
        return 'You were born this very year!';
      }
    if (yearOfBirth < yearToCount) {
        count = yearToCount - yearOfBirth;
        if (count > 1) {
          return `You are ${count} years old.`;
        } else {
          return `You are ${count} year old.`;
        }
        
    } else if (yearOfBirth > yearToCount) {
        count = yearOfBirth - yearToCount;
        if (count > 1) {
          return `You will be born in ${count} years.`;
        } else {
          return `You will be born in ${count} year.`;
        }
    }
    
}


https://www.codewars.com/kata/even-or-odd/train/javascript

function evenOrOdd(number) {
  if (number % 2 == 0) return "Even";
  return "Odd";
}

https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no/train/javascript

function boolToWord( bool ){
    //...
    return bool == 1 ? 'Yes':'No';
}

https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript

function reverseList(list) {
    let listCopy = [];
    let j = list.length - 1;
    for (let i = 0; i < list.length; i++) {
      listCopy[i] = list[i];
    }
    
    for (let i = 0; i < list.length; i++) {
      list[i] = listCopy[j];
      j--;
    }
    return list;
  
}

https://www.codewars.com/kata/who-likes-it/train/javascript

function likes(names) {
    // TODO
    if (names.length == 0) {
      return "no one likes this";
    } else if (names.length == 1) {
      return `${names[0]} likes this`;
    } else if (names.length == 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (names.length == 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

https://www.codewars.com/kata/list-filtering/train/javascript

function filter_list(l) {
  // Return a new array with the strings filtered out
  let newL = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] != 'string') {
          newL.push(l[i]);
        }
  }
  return newL;
}

https://www.codewars.com/kata/sum-mixed-array/train/javascript

function sumMix(x){
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += parseInt(x[i]);
  }
  return sum;
}

https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

function basicOp(operation, value1, value2)
{
  // Code
  return eval(value1 + operation + value2);
}

https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] != false & arrayOfSheep[i] != null & arrayOfSheep[i] != undefined) {
      count++;
    }
  }
  return count;
}

https://www.codewars.com/kata/array-plus-array/train/javascript

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] + arr2[i];
  }
  return sum; //something went wrong
}