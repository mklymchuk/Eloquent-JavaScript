// Завдання: https://shpp.gitbook.io/zero/tutorials/functions/max-number
/*Найбільше число
Написати програму, яка:
function max(first, second) {
    // тут треба щось дописати...
}
​
let number1 = +prompt("введи перше число");
let number2 = +prompt("введи друге число");
​
console.log(max(number1, number2)); */
function max (first, second) {
    // тут треба щось дописати...
    if (first > second) {
        return first;
    }

    return second;
}

let number1 = +prompt("введи перше число");
let number2 = +prompt("введи друге число");

console.log(max(number1, number2));