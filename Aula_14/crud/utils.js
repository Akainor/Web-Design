const urlServer = "https://67348a99a042ab85d11a99dd.mockapi.io/Animais/";

let btns = document.querySelectorAll('a', '.menuLink');
let currentUrl = window.location.href;

for (let btn of btns) {
    if (currentUrl.startsWith(btn.href)) {
        btn.classList.add('active');
        break;
    }
}