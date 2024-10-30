let numeros = [10, 20, 30, 40, 50];

let somaArray = function (array) {
    let i;
    let soma=0;
    for(i=0;i<array.length;i++)
    {
        soma += array[i];
    }
    return soma;
}

console.log(somaArray(numeros));