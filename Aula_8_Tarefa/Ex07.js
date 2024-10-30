function inverter(str) {
    return str.split('').reverse().join('');
}

var nome = "Lucca Falzoni"

console.log("Texto: ", nome);
nome = inverter(nome);
console.log("Texto Invertido: ", nome);
