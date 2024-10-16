function contar(str) {
    const vogais = 'aeiou';
    let cont = 0;

    for (let char of str) {
        if (vogais.includes(char)) {
            cont++;
        }
    }

    return cont;
}

let texto = "Variado";

let vog = contar(texto);

console.log("Texto: ", texto);
console.log("Quantidade de vogais: ", vog);