let x = 10; //глобальна змінна
if (true) {
    let y = 20; //локальна змінна
    var z = 30; //змінна типу var яка доступна в цілому скрипті
    
    console.log(x + y + z);
};

console.log(x + z);

const halve = function(n) {
    return n / 2;
};

let n = 10;

console.log(halve(100)); //попри наявність змінної глобальної з такою самою назвою виконуєтся в першу чергу змінна яка є в функції
console.log(n); //глобальна змінна