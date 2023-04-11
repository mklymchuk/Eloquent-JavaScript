/*Сума послідовності чисел
Написати програму, яка питає людину про два числа А і Б, та виводить на консоль одне число, яке є сумою ряду чисел від А до Б включно.
Написати треба так, щоб не було різниці, чи першим вводимо більше число, чи менше.
Також враховуйте, що користувач може ввести 2 однакових числа (тобто послідовність складатиметься лише з одного числа).*/
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/sum_of_numbers_sequence
let number1 = +prompt("First number: ");
let number2 = +prompt("Second number: ");
let temp = 0;
let sum = 0;

if (number1 > number2) {
    temp = number1;
    number1 = number2;
    number2 = temp;
}

for (number1; number1 <= number2; number1++) {
    sum = sum + number1;
}

console.log(sum);
