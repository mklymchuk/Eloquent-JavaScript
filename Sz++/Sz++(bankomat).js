// Завдання: https://shpp.gitbook.io/zero/tutorials/arrays/atm

let cardNumber = +prompt("Card number: ");
let cards = [];
let money = [-123, 33, 0, 4500, -611, 44, 0, 0, -1, -85];
let message = "Стан рахунків:";

for (let i = 0; i < 10; i++) {
    cards[i] = i;
}

for (let isCardValid = 0; isCardValid < 1;) {
    if (cardNumber > cards.length - 1 || cardNumber < 0) {
        cardNumber = +prompt("Card number: ");
    } else {
        console.log("Поточна картка: " + cardNumber);
        isCardValid++;
    }
}

let customerMoney = +prompt("Money: ");

for (let transactionLimit = 0; transactionLimit < 1;) {
    if (customerMoney > 1000 || customerMoney < -1000) {
        customerMoney = +prompt("Money: ");
    } else {
        console.log("Сума транзакції: " + customerMoney);
        transactionLimit++;
    }
}

console.put(message);
let sum = 0;

for (let i = 0; i < cards.length; i++) {
    if (cardNumber == cards[i] && customerMoney != 0) {
        money[i] += customerMoney;
        console.put(" " + money[i]);

        if (i + 1 < cards.length) {
            console.put(",");
        }
    } else {
        console.put(" " + money[i]);

        if (i + 1 < cards.length) {
            console.put(",");
        }
    }

    sum += money[i];
}

console.log("\nЗагальний баланс: " + sum);
