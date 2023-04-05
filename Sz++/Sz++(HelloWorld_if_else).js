//Hello world p.1 
// Завдання: https://shpp.gitbook.io/zero/tutorials/commands/hello-world#chastina-1

console.log("hello world");

//Hello world p.2 
// Завдання: https://shpp.gitbook.io/zero/tutorials/commands/hello-world#chastina-2
console.log("hello\nworld");

//Hello world p.3 
// Завдання: https://shpp.gitbook.io/zero/tutorials/commands/hello-world#chastina-3
console.log(12892323 + 454665768);

//Variables p.1
// Завдання: https://shpp.gitbook.io/zero/tutorials/commands/swap#chastina-1
let first = 10;
let second = 11;

console.log("first = " + first);
console.log("second = " + second + "\n");

let temp1 = first;
let temp2 = second;

console.log("first = " + (first = temp2));
console.log("second = " + (second = temp1));

//Variables p.2
// Завдання: https://shpp.gitbook.io/zero/tutorials/commands/swap#chastina-2
first = 10;
second = 11;

console.log("first = " + first);
console.log("second = " + second + "\n");

temp1 = first;

console.log("first = " + (first = second));
console.log("second = " + (second = temp1));

//Variables p.3
// Завдання: https://shpp.gitbook.io/zero/tutorials/commands/swap#chastina-3-ne-obovyazkovo
first = 10;
second = 11;

console.log("first = " + first);
console.log("second = " + second + "\n");

first = first + second;
second = first - second;
first = first - second;

console.log("first = " + first);
console.log("second = " + second);

//Next number
// Завдання: https://shpp.gitbook.io/zero/tutorials/input-output/get-next-number
let number = +prompt("Введіть число");

number++;
console.log(number);
//console.log(+prompt("Введіть число") + 1);

//two numbers sum
// Завдання: https://shpp.gitbook.io/zero/tutorials/input-output/addition
temp1 = +prompt();
temp2 = +prompt();
let sum = temp1 + temp2;

console.log(temp1 + " + " + temp2 + " = " + sum);
/*let first = +prompt("Enter the first number");
let second = +prompt("Enter the second number");
console.log(first + " + " + second + " = " + (first + second));*/ 

//kmden
// Завдання: https://shpp.gitbook.io/zero/tutorials/if-else/km-day-1
let distance = +prompt("Скільки ви проходите кілометрів в день?");

if (distance < 4) {
    console.log("мало");
} else {
    console.log("красунчик!");
}
/*if (+prompt("Скільки кілометрів ти пройшов сьогодні?") <= 3) {
    console.log("мало");
} else {
    console.log("красунчик!");
}*/

//kmden-2 p1
// Завдання: https://shpp.gitbook.io/zero/tutorials/if-else/km-day-2#chastina-1
distance = +prompt("Скільки ви проходите кілометрів в день?");

if (distance < 4) {
    console.log("мало");
}

if (distance > 3 && distance < 20) {
    console.log("красунчик!");
}

if (distance >= 20) {
    console.log("марафонець!");
}

/*let distance = +prompt("Скільки кілометрів ти пройшов сьогодні?");

if (distance < 4 && distance >= 0) {
    console.log("мало");
}
 
if (distance >= 4 && distance < 20) {
    console.log("красунчик!");
}
 
if (distance >= 20) {
    console.log("марафонець!");
} */

//kmden-2 p2
// Завдання: https://shpp.gitbook.io/zero/tutorials/if-else/km-day-2#chastina-2
distance = +prompt("Скільки ви проходите кілометрів в день?");

if (distance < 20) {
    if (distance > 3) {
        console.log("красунчик!");
    } else {
        console.log("мало");
    }
}

if (distance >= 20) {
    console.log("марафонець!");
}

/*let distance = +prompt("Скільки кілометрів ти пройшов сьогодні?");
 
if (distance >= 20) {
    console.log("марафонець!");
} else {
    if (distance >= 4) {
        console.log("красунчик!");
    } else if (distance >= 0) {
        console.log("мало");
    } 
}*/

//kmden-2 p3
// Завдання: https://shpp.gitbook.io/zero/tutorials/if-else/km-day-2#chastina-3
distance = +prompt("Скільки ви проходите кілометрів в день?");

if (distance < 20) {
    if (distance > 3) {
        console.log("красунчик!");
    }

    if (distance < 4) {
        console.log("мало");
    }
}

if (distance >= 20) {
    console.log("марафонець!");
}
/*let distance = +prompt("Скільки кілометрів ти пройшов сьогодні?");


if (distance <= 3) {
    console.log("мало");
}

if (distance >= 20) {
    console.log("марафонець!");
}
 
if (distance > 3) {
    if (distance < 20) {
        console.log("красунчик!");
    }
} */

//Empire state bulding
// Завдання: https://shpp.gitbook.io/zero/tutorials/if-else/empire-state-building-lift
let floor = Number(prompt("Будьласка напишіть номер поверху: "));

if (floor < 1 || floor > 102) {
    console.log("невірний поверх");
} else if (floor >= 24 && floor <= 39) {
    let password = +prompt("Введіть пароль для поверху з 24 по 39: ");

    if (password == 1337) {
        console.log("ок");
    } else {
        console.log("невірний пароль");
    }
} else {
    console.log("ок");
}

//пропоноване розвязання 
/*let floor = +prompt("Введіть номер поверху");
if (floor >= 1 && floor <= 102) {
    if (floor >= 24 && floor <= 39) {
        if (+prompt("Введіть пароль") == 1337) {
            console.log("ок");
        } else {
            console.log("невірний пароль");
        }
    } else {
        console.log("ок");
    }
} else {
    console.log("невірний поверх");
} */