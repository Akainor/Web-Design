function altImg() {
    const img = document.getElementById("imgAlt");
    imgAlt.src = imgAlt.src.endsWith('Auxiliar/Dog.png') ? 'Auxiliar/Cat.png' : 'Auxiliar/Dog.png';
}

function altTitle() {
    const t = document.getElementById("title");
    title.innerText = title.innerText === 'Meu Título' ? 'WOW!!!' : 'Meu Título';
}

function altPar() {
    const par = document.getElementById("par");
    par.style.color = par.style.color === 'black' ? 'red' : 'black';
}

function Aud() {
    const aud = new Audio("Auxiliar/Coin mario.wav");
    aud.play();
}

function altClass () {
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");

    b1.classList.toggle("green");
    b2.classList.toggle("green");
    b3.classList.toggle("green");
}