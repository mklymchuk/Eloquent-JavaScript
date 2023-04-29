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