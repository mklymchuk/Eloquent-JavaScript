/* Умови
Вивести на екран квадрат із зірочок, розмір якого задає користувач.
Увага: саме квадрат, а не прямокутник! 
Частина 1
Через for */
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/square#chastina-1
let number = +prompt("Number: ");

for (let y = number; y > 0; y--) {
    for (let x = number; x > 0; x--) {
        console.put("* ");
    }

    console.put("\n");
}

// Частина 2
// Через while
// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/square#chastina-2
let size = +prompt("Size: ");

let y = 0;

while (y < size) {
    let x = 0;

    while (x < size) {
        console.put("* ");
        x++;
    }

    console.log();
    y++;
}