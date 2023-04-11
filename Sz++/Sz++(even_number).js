/*Найбільше парне число
Знайти найбільше число із тих чисел, які вводить користувач.
Припинити приймати числа, коли він введе 0.
Не враховувати непарні числа (погугліть про оператор залишку від ділення (%) або )
​
Якщо за весь час користувач не ввів жодного парного — вивести на консоль текст "Жодного парного".
Якщо було хоча б одне парне — вивести на консоль це число.
​
Бажано зробити, щоб обробляло і від'ємні числа (але не обов'язково)
😉*/

// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/highest_even_number
let temp = 0;

for (let i = 1; i > 0; i++) {
    let num = +prompt("Num: ");

    if (num % 2 == 0 && num != 0 && temp < num) {
        temp = num;
    } else if (num < temp) {
        console.put(temp);
        break;
    }

    if (num == 0) {
        break;
    }
}

if (temp == "") {
    console.put("Жодного парного");
}

// рішення жахливе, але поки що буде так 

//рішення від школи

/*let maxNumber = -Infinity;
 
for (let input; input != 0; input = parseInt(prompt("Введи число"))) {
    if (input != "" && input % 2 == 0 && input > maxNumber) {
        maxNumber = input;
    }
}
 
console.log(maxNumber === -Infinity ? "Жодного парного" : maxNumber);*/