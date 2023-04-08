// Трикутники
// Вивести на консоль трикутники з зірочок, розмір вказує користувач.
//  Трикутник 1 
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/triangles
let size = +prompt("Size: ");

for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
        console.put("*");
    }

    console.log();
}

// Трикутник 2
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/triangles
size = +prompt("Size: ");

for (let i = 0; i < size; i++) {
    for (let j = size; j > i; j--) {
        console.put("*");
    }

    console.log();
}

// Трикутник 3
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/triangles
size = +prompt("Size: ");

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if (y > x) {
            console.put(" ");
        } else if (y <= x) {
            console.put("*");
        }
    }

    console.log();
}

// запропоноване рішення з трьох циклів
/*let size = +prompt("Введіть розмір трикутника");

for (let i = size; i > 0; i--) {
    for (let j = 0; j < size - i; j++) {
        console.put(" ");
    }
    for (let j = 0; j < i; j++) {
        console.put("*");
    }
    console.log();
} */

//Трикутник 4
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/triangles
size = +prompt("Size: ");

for (let i = 0; i < size; i++) {
    for (let j = size; j > 0; j--) {
        if (i < j - 1) {
            console.put(" ");
        } else {
            console.put("*");
        }
    }

    console.log();
}
