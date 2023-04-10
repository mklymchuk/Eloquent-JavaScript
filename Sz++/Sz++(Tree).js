
/*
Ялинка
Вивести на екран ялинку з "кроною" тої висоти, яку вказує користувач.
Ось приклад ялинки висотою 3 (номери рядків виводити не треба, лише ялинку):
  *
 ***
*****
  *   
*/
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/christmas_tree
let height = +prompt("Height: ");
let stars = 1;
let spaces = stars;

for (let y = 0; y < height; y++) {
    for (let x = height - 1; x > y; x--) {
        console.put(" ");
    }

    for (let x = 0; x < stars; x++) {
        console.put("*");
    }

    console.log();
    stars += 2;
}

for (let y = height + 1; y > height; y--) {
    for (let x = 0; x < stars; x++) {
        if (stars / 2 > x + 2) {
            console.put(" ");
        } else if (x != 0) {
            console.put("*");
            break;
        }
    }
}

// рішення школи
/* let size = +prompt("Введіть висоту ялинки");

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
        console.put(" ");
    }

    for (let j = 0; j < i * 2 + 1; j++) {
        console.put("*");
    }

    console.log("");
}

for (let i = 0; i < size - 1; i++) {
    console.put(" ");
}

if (size > 0) {
    console.put("*");
}
 */
