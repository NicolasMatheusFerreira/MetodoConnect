// Validação dos campos de informações de contato cliente

const nome = document.getElementById('nome');
nome.addEventListener('input', () => {
    if (validaNome(nome.value))
        nome.style.border = '2px solid rgb(60, 230, 54)';
    else nome.style.border = '2px solid #e63636';
});
nome.addEventListener('blur', () => { nome.style.border = '1px solid #888'; });

const email = document.getElementById('email');
email.addEventListener('input', () => {
    if (validaEmail(email.value))
        email.style.border = '2px solid rgb(60, 230, 54)';
    else email.style.border = '2px solid #e63636';
});
email.addEventListener('blur', () => { email.style.border = '1px solid #888'; });

const telefone = document.getElementById('telefone');
telefone.addEventListener('input', () => {
    if (validaTelefone(telefone.value))
        telefone.style.border = '2px solid rgb(60, 230, 54)';
    else telefone.style.border = '2px solid #e63636';
});
telefone.addEventListener('blur', () => { telefone.style.border = '1px solid #888'; });

const celular = document.getElementById('celular');
celular.addEventListener('input', () => {
    if (validaCelular(celular.value))
        celular.style.border = '2px solid rgb(60, 230, 54)';
    else celular.style.border = '2px solid #e63636';
});
celular.addEventListener('blur', () => { celular.style.border = '1px solid #888'; });