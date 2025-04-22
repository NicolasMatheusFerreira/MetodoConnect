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

// Sessão de categoria de serviços
categoriaServico.addEventListener('input', () => {limparCampos(); categoriaServicos(); });

// Sessão de observações do formulário
adicionarMensagem.addEventListener('click', () => {campoMensagem(); });

// Sessão de abertura de chamado do formulário
const abrirChamado = document.getElementById('btn-abrir-chamado');
abrirChamado.addEventListener('submit', () => { aberturaChamado(); });