// Obtém a modal
const modal = document.getElementById("modal");

// Obtém os botões que abrem a modal
const btnAbrirModal1 = document.getElementById("abrirModalBtn1");

// Obtém o elemento que fecha a modal
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

const amostraDeChamadas = `
                                <div class="amostraDeChamadas" id="amostraDeChamadas">

                                    <div>
                                        <label class="modal-text">Está intermitênte?</label>
                                        <select name="categoriaServico" id="categoriaServico" class="cx-entrada">
                                            <option value="sim" class="cx-entrada">Sim</option>
                                            <option value="nao" class="cx-entrada">Não</option>
                                        </select>
                                    </div>

                                    <table>
                                        <tr>
                                            <th>
                                                <div id="cenario1">
                                                    <label for="cenarioA" class="modal-text">Cenário A:</label><br>
                                                    <input type="tel" id="numeroOrigem" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada">                                
                                                    <input type="tel" id="numeroDestino" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada">
                                                </div>
                                            </th>
                                            <th>
                                                <div id="cenario2">
                                                    <label for="cenarioB" class="modal-text">Cenário B:</label><br>
                                                    <input type="tel" id="numeroOrigem" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada">                                
                                                    <input type="tel" id="numeroDestino" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada">
                                                </div>
                                            </th>
                                            <th>
                                                <div id="cenario3">
                                                    <label for="cenarioC" class="modal-text">Cenário C:</label><br>
                                                    <input type="tel" id="numeroOrigem" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada">                                
                                                    <input type="tel" id="numeroDestino" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada">
                                                </div>
                                            </th>
                                        </tr>
                                    </table>
                                </div>
                               `;
const configuracaoDeEquipamentos = `
                                <div class="configuracaoDeEquipamentos" id="configuracaoDeEquipamentos">
                                    
                                </div>
                            `;

// Obtém sessão de problema
const categoriaServico = document.getElementById('categoriaServico');
const categoriaProblema = document.getElementById('categoriaProblema');
const adicionarMensagem = document.getElementById('adicionarMensagem');

categoriaProblema.addEventListener('click', () => {

    // Pega opção selecionado pelo Selected
    const valorSelecionado = categoriaProblema.value;
    console.log(valorSelecionado);

    // Pega ID do container onde será montado o conteúdo
    const container = document.getElementById('container');

    if (valorSelecionado=="selecione") {
        container.innerHTML = ``;
    } else if (valorSelecionado=="nao-faz-chamadas" || valorSelecionado=="nao-recebe-chamadas" || valorSelecionado=="nao-faz-nao-recebe-chamadas" || valorSelecionado=="intermitencia-chamadas") {
        container.innerHTML = amostraDeChamadas;   
    } else if (valorSelecionado=="problemas-audio") {

    } else if (valorSelecionado=="configuracao-equipamento") {
        container.innerHTML = configuracaoDeEquipamentos;
    }
});

adicionarMensagem.addEventListener('click', () => {
    const containerMensagem = document.getElementById('containerMensagem');
    containerMensagem.innerHTML = `<textarea name="ServicoMensagem" rows="10" cols=100 class="cx-entrada"></textarea>`;
});


