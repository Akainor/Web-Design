/* function mostraAlerta (msg) {
    alert(msg);
}

function mostraLog (msg) {
    console.log(msg);
}



function soma(a, b, callback) {
    let result = a + b;
    callback(result);
}

soma(10, 15, mostraAlerta); */

/* let url = "db.txt";

fetch(url)
    .then(response => response.text())
    .then(data =>{
        document.querySelector("#title").innerHTML = data
    })
    .catch(error => {
        console.log("Erro: "+error)
    }); */

let url = "https://67348a99a042ab85d11a99dd.mockapi.io/Animais/";

function read(id) {
    fetch(url+id)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector("#title").innerHTML = data.name
        })
        .catch(error => {
            console.log("Erro: " + error)
        });
}

function salvar(nome, avatar) {
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            "name": nome,
            "avatar": avatar 
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erro:', error));
    
    
}

read(39);
salvar("Sebastião", "https://www.google.com.br");