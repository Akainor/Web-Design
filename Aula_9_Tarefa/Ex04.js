let numeros = [1,2,3,4,5,6,7,8,9,10];
let impares = [];

let impar = function (array1,array2){
    let i, j;
    for(i=0,j=0;i<array1.length;i++)
    {
        if(array1[i] % 2 == 1)
        {
            array2[j] = array1[i];
            j++;
        }
    }
    return array2;
}

console.log(impar(numeros,impares));