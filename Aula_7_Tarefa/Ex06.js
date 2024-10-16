function teste(num) {
    console.log("Número: ", num);
    if (num <= 0) {
        console.log("Número Inválido");
    }
    else {
        console.log("Resultado: ", num * 2);
    }
}

var num1 = 12, num2 = -12;

teste(num1);
teste(num2);