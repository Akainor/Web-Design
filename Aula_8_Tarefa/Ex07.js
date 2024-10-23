let numeros = [1,24,15,37,48,11];

let encontraMaiorNumero = function(array) {
    let i, maior = 0;
    for(i=0;i<array.length;i++)
    {
        if(array[i]>maior)
        {
            maior = array[i];
        }
    }
    return maior;
}

console.log("Numeros: "+numeros, "Maior: "+encontraMaiorNumero(numeros));