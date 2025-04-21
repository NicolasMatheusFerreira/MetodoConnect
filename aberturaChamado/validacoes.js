function validaNome(nome) {
    if (nome == "")
        return false
    return true;
}

function validaEmail(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[a-zA-Z]{2,}$/);

    if (emailRegex.test(email))
        return true;
    return false;
}

function validaTelefone(telefone) {
    const telefoneRegex = new RegExp(/^[0-9]{10,}$/);

    if (telefoneRegex.test(telefone))
        return true;
    return false;
}

function validaCelular(celular) {
    const celularRegex = new RegExp(/^[0-9]{11,}$/);

    if (celularRegex.test(celular))
        return true;
    return false;
}

function validaCampos(email, telefone, celular) {
    if (!validaNome(nome) || (!validaEmail(email) && email > "") || !validaTelefone(telefone) || !validaCelular(celular)) {
        alert('Informações invalidas digite novamente');
    }
}