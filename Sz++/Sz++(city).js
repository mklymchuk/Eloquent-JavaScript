// Завдання: https://shpp.gitbook.io/zero/tutorials/arrays/cities
let citys = [];
let dontKnow = 0;

for (let i = 0; i < 10; i++) {
    citys[i] = prompt("Some city's: ");
}

let city = prompt("What is your city?");

for (let j = 0; j < 10; j++) {
    if (city != citys[j]) {
        dontKnow++;
    }
}

if (dontKnow == 10) {
    console.log("Я НЕ знаю твоє місто");
} else {
    console.log("Я знаю твоє місто");
}

//правильно перевірити через true / false