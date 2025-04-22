const modal = document.getElementById("modal");
const btnAbrirModal1 = document.getElementById("abrirModalBtn1");
const spanFechar = document.querySelector(".fechar-modal");

// Função para abrir a modal
function abrirModal() {
    modal.style.display = "block";
}

// Função para fechar a modal
function fecharModal() {
    modal.style.display = "none";
}

// Event listeners para abrir a modal
btnAbrirModal1.addEventListener("click", abrirModal); // Método 1: Função direta

// Event listener para fechar a modal ao clicar no "x"
spanFechar.addEventListener("click", fecharModal);

// Event listener para fechar a modal ao clicar fora da modal
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        fecharModal();
    }
});

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

// Sessão de categoria de serviços
categoriaServico.addEventListener('input', () => {limparCampos(); categoriaServicos();});
// Sessão de observações do formulário
adicionarMensagem.addEventListener('click', () => {campoMensagem();});
// Sessão de abertura de chamado do formulário
const abrirChamado = document.getElementById('btn-abrir-chamado');
abrirChamado.addEventListener('submit', () => { aberturaChamado();});