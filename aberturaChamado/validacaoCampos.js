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

// Validação dos campos de amostra de chamadas


const numeroOrigem1 = document.getElementById('numeroOrigem1');
const numeroDestino1 = document.getElementById('numeroDestino1');

numeroOrigem1.addEventListener('input', () => {
    if (validaTelefone(numeroOrigem1.value))
        numeroOrigem1.style.border = '2px solid rgb(60, 230, 54)';
    else numeroOrigem1.style.border = '2px solid #e63636';
});
numeroOrigem1.addEventListener('blur', () => { nome.style.border = '1px solid #888'; });

numeroDestino1.addEventListener('input', () => {
    if (validaTelefone(numeroDestino1.value))
        numeroDestino1.style.border = '2px solid rgb(60, 230, 54)';
    else numeroDestino1.style.border = '2px solid #e63636';
});
numeroDestino1.addEventListener('blur', () => { nome.style.border = '1px solid #888'; });

const numeroOrigem2 = document.getElementById('numeroOrigem2');
const numeroDestino2 = document.getElementById('numeroDestino2');

numeroOrigem2.addEventListener('input', () => {
    if (validaTelefone(numeroOrigem2.value))
        numeroOrigem2.style.border = '2px solid rgb(60, 230, 54)';
    else numeroOrigem2.style.border = '2px solid #e63636';
});
numeroOrigem2.addEventListener('blur', () => { nome.style.border = '1px solid #888'; });

numeroDestino2.addEventListener('input', () => {
    if (validaTelefone(numeroDestino2.value))
        numeroDestino2.style.border = '2px solid rgb(60, 230, 54)';
    else numeroDestino2.style.border = '2px solid #e63636';
});
numeroDestino2.addEventListener('blur', () => { nome.style.border = '1px solid #888'; });

const numeroOrigem3 = document.getElementById('numeroOrigem3');
const numeroDestino3 = document.getElementById('numeroDestino3');

numeroOrigem3.addEventListener('input', () => {
    if (validaTelefone(numeroOrigem3.value))
        numeroOrigem3.style.border = '2px solid rgb(60, 230, 54)';
    else numeroOrigem3.style.border = '2px solid #e63636';
});
numeroOrigem3.addEventListener('blur', () => { nome.style.border = '1px solid #888'; });

numeroDestino3.addEventListener('input', () => {
    if (validaTelefone(numeroDestino3.value))
        numeroDestino3.style.border = '2px solid rgb(60, 230, 54)';
    else numeroDestino3.style.border = '2px solid #e63636';
});
numeroDestino3.addEventListener('blur', () => { nome.style.border = '1px solid #888'; });
