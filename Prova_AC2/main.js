let itens = [];
function adicionarItem() {
    const texto = document.querySelector('#input').value;
    itens.push(texto);
    atualizarLista();
}
function apagar(index) {
    itens.splice(index, 1);
    atualizarLista();
}
function atualizarLista() {
    const list = document.querySelector('#list');
    list.innerHTML = '';
    itens.forEach((item, index) => {
        const novoItem = document.createElement('li'); novoItem.innerHTML = '<div class="col"><div class="card h-100" style="width: 18rem;"><img src="https://picsum.photos/600/400?radom(' + index + ')" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + item + '</h5><p class="card-text"></p><button class="btn btn-primary" onclick="apagar(' + index + ')">Apagar</button></div></div></div>';
        list.appendChild(novoItem);
    });
    document.querySelector('#input').value = "";
}

function apagarTudoMesmo() {
    itens.forEach((index) => {
        apagar(index);
        atualizarLista();
    });
}