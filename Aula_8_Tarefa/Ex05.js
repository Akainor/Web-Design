let i;
let numeros = '';

for (i = 1; i <= 10; i++) {
    numeros += i;
    if (i < 10) {
        numeros += '-';
    }
}

console.log(numeros);