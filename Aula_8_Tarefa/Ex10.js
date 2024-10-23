let arrayAlunos = [
    {"Nome": "Lucca Falzoni", "Idade": "21", "Curso": "Computação", "Matrícula": 248329},
    {"Nome": "Murilo Prestes", "Idade": "17", "Curso": "Computação", "Matrícula": 248330},
    {"Nome": "Luiz Fernando", "Idade": "18", "Curso": "Computação", "Matrícula": 248331},
    {"Nome": "Matheus Cravo", "Idade": "16", "Curso": "Computação", "Matrícula": 248332}
];

let arrayAlunosMaior = [];

let alunosMaior = function(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (parseInt(array1[i].Idade) >= 18) {
            array2.push(array1[i]);
        }
    }
}
alunosMaior(arrayAlunos, arrayAlunosMaior);

console.log(arrayAlunosMaior);