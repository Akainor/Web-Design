let endereço = {"Rua": "Águiar", "Numero": 332, "Bairro": "Haro", "Cidade": "Sorocaba"};

for (let prop in endereço) {
    console.log(prop + ": " + endereço[prop]);
}