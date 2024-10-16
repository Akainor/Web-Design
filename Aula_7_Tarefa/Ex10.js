function palindromo(texto) {
    var temp;
    temp = texto.split('').reverse().join('');
    if (temp == texto) {
        console.log(texto, "é um palíndromo");
    }
    else {
        console.log(texto, "não é um palíndromo");
    }
}

var texto1 = "arara", texto2 = "Lucca";

palindromo(texto1);
palindromo(texto2);