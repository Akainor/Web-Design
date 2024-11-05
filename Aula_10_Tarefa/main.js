function number(n) {
    var num = n;
    var s = document.getElementById("screen");

    if (s.innerText == '0' || s.innerText == 'Error') {
        s.innerText = num;
    }
    else {
        s.innerText = s.innerText + num;
    }
}

function del() {
    var s = document.getElementById("screen");

    s.innerText = '0';
}

function plus() {
    var s = document.getElementById("screen");

    if (s.innerText == '0' || s.innerText == 'Error') {
        s.innerText = '';
    }
    s.innerText = s.innerText + '+';
}

function minus() {
    var s = document.getElementById("screen");

    if (s.innerText == '0' || s.innerText == 'Error') {
        s.innerText = '';
    }
    s.innerText = s.innerText + '-';
}

function multi() {
    var s = document.getElementById("screen");

    if (s.innerText == '0' || s.innerText == 'Error') {
        s.innerText = '';
    }
    s.innerText = s.innerText + '*';
}

function divi() {
    var s = document.getElementById("screen");

    if (s.innerText == '0' || s.innerText == 'Error') {
        s.innerText = '';
    }
    s.innerText = s.innerText + '/';
}

function equal() {
    var s = document.getElementById("screen");

    try {
        s.innerText = eval(s.innerText);
    }
    catch (e) {
        s.innerText = 'Error';
    }
}