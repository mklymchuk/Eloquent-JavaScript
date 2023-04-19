/*Відцентрована штука
Питайте у користувача числа, доки він не введе 0.
Потім виведіть на консоль відцентровану штуку з зірочок, спираючись на введені числа.
Якщо користувач ввів парне число, ваша програма не повинна його враховувати у відцентрованій штуці. Виходимо з того, що чисел буде не більше 20. */
// Завдання: https://shpp.gitbook.io/zero/tutorials/arrays/centered-thing
let arrayOfNumbers = [];
let number;
let x = 0;
let maxValue;
let temp;

do {
    number = +prompt("Введіть числа, нуль кінець програми: ");

    if (number % 2 == 1) {
        arrayOfNumbers[x] = number;
        x++;
    }
} while (number != 0);

for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = 0; j < arrayOfNumbers.length; j++) {
        if (arrayOfNumbers[i] <= arrayOfNumbers[j]) {
            maxValue = arrayOfNumbers[j];
            break;
        }
    }
}

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < maxValue) {
        temp = maxValue - arrayOfNumbers[i];
        temp = temp / 2;

        for (let x = 0; x < temp; x++) {
            console.put(" ");
        }
    }

    for (let j = 0; j < arrayOfNumbers[i]; j++) {
        console.put("*");
    }

    console.log();
}