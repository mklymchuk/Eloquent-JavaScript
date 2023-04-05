const square = function (x) {
    return x * x;
}; //дефініція функції

console.log(square(11));

const makeNoise = function () {
    console.log("Pling!");
}; //функція без параметру

makeNoise();

const power = function (base, exponent) {
    let result = 1;

    for (let count = 0; count < exponent; count++) {
        result *= base;
    }

    return result;
}; //два параметри в функції

console.log(power(2, 64));