//Завдання зірочки частина 1 
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/stars#chastina-1
let asteriks = 0;

while (asteriks < 10) {
    console.put("*");
    asteriks++;
}

//Завдання зірочки частина 2 
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/stars#chastina-2
asteriks = 0;

while (asteriks < 100) {
    console.put("*");
    asteriks++;
}

//Завдання зірочки частина 3 
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/stars#chastina-3
asteriks = +prompt("Asteriks number: ");

while (asteriks > 0) {
    console.put("*");
    asteriks--;
}

/* Пропоноване розвязання
let quantity = +prompt("Скільки зірочок ви хочете побачити?");
let i = 0;
while (i < quantity) {
    console.put("*");
    i++;
} */

// //Завдання зірочки частина 4 
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/stars#chastina-4
asteriks = +prompt("Asteriks number: ");

for (let i = 0; i < asteriks; i++) {
    console.put("*");
}

//Числовий ряд ч1 від 1 до N включно, через for
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-1
let number = +prompt("Number: ");

for (let i = 1; i <= number; i++) {
    if (i == number) {
        console.put(i);
    } else {
        console.put(i + ",");
    }
}

/* Пропоноване розвязання
let input = +prompt("Введіть число");
for (let i = 1; i <= input; i++) {
    console.put(i);
    if (i < input) {
        console.put(",");
    }
} */

//Числовий ряд Частина 2
//від 1 до N включно, через while
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-2
number = +prompt("Number: ");
let i = 1;

while (i <= number) {
    if (i == number) {
        console.put(i);
    } else {
        console.put(i + ",");
    }

    i++;
}

//Числовий ряд Частина 3
//від N до 1 включно, через for
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-3
number = +prompt("Number: ");

for (let i = 0; i < number; number--) {
    if (number == 1) {
        console.put(number);
    } else {
        console.put(number + ",");
    }
}