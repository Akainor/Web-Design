function validar(email) {
    const partes = email.split('@');
    if (partes.length !== 2 || partes[0] === '' || partes[1] === '') {
        return false;
    }

    // Verifica se há pelo menos um ponto '.' após o '@'
    const dominio = partes[1];
    if (dominio.indexOf('.') === -1) {
        return false;
    }

    return true;
}

console.log("teste@exemplo.com", validar("teste@exemplo.com"));
console.log("teste@exemplo", validar("teste@exemplo"));
console.log("teste@.com", validar("teste@.com"));
console.log("test@@exemplo.com", validar("test@@exemplo.com"));