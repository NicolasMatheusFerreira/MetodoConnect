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

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const celular = document.getElementById('celular');

email.addEventListener('input', () => {
    if (validaEmail(email.value))
        email.style.border = '2px solid rgb(60, 230, 54)';
    else email.style.border = '2px solid #e63636';
});

function validaEmail(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[a-zA-Z]{2,}$/);

    if (emailRegex.test(email))
        return true;
    return false;
}

email.addEventListener('blur', () => {email.style.border = '1px solid #888';});

nome.addEventListener('input', () => {
    if (validaNome())
        nome.style.border = '2px solid rgb(60, 230, 54)';
    else nome.style.border = '2px solid #e63636';
});

function validaNome() {
    if (nome.value=="")
        return false
    return true;
}

nome.addEventListener('blur', () => {nome.style.border = '1px solid #888';});

function validaTelefone() {
    const telefoneRegex = new RegExp(/^[0-9]{10,}$/);

    if (telefoneRegex.test(telefone.value))
        return true;
    return false;
}

telefone.addEventListener('input', () => {
    if (validaTelefone())
        telefone.style.border = '2px solid rgb(60, 230, 54)';
    else telefone.style.border = '2px solid #e63636';
});

telefone.addEventListener('blur', () => {telefone.style.border = '1px solid #888';});

function validaCelular() {
    const celularRegex = new RegExp(/^[0-9]{11,}$/);

    if (celularRegex.test(celular.value))
        return true;
    return false;
}

celular.addEventListener('input', () => {
    if (validaCelular())
        celular.style.border = '2px solid rgb(60, 230, 54)';
    else celular.style.border = '2px solid #e63636';
});

celular.addEventListener('blur', () => {celular.style.border = '1px solid #888';});

function validaCampos() {
   if (!validaNome() || (!validaEmail(email.value) && email.value>"") || !validaTelefone() || !validaCelular()) {
            alert('Informações invalidas digite novamente');
   }
}

const amostraDeChamadas = `
                                <div class="amostraDeChamadas" id="amostraDeChamadas">

                                    <div>
                                        <label class="modal-text">Está intermitênte?</label>
                                        <select name="categoriaServico" id="categoriaServico" class="cx-entrada">
                                            <option value="sim" class="cx-entrada">Não</option>
                                            <option value="nao" class="cx-entrada">Sim</option>
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

const categoriaProblema = `<select name="categoriaProblema" id="categoriaProblema" class="cx-entrada">
                            <option value="selecione" label="Selecione" class="cx-entrada" selected>-- SELECIONE --</option>
                            <option value="nao-faz-chamadas" class="cx-entrada">(1). (Inoperância Parcial) - Não Faz Chamadas</option>
                            <option value="nao-recebe-chamadas" class="cx-entrada">(2). (Inoperância Parcial) - Não Recebe Chamadas</option>
                            <option value="nao-faz-nao-recebe-chamadas" class="cx-entrada">(3). (Inoperância Total) - Não Faz E Não recebe Chamadas</option>
                            <option value="problemas-audio" class="cx-entrada">(4). Problemas no Áudio das Chamadas (Voz Robótizada, Picotamento de Voz)</option>
                            <option value="configuracao-equipamento" class="cx-entrada">(5). Configuração de Equipamentos</option>
                            <option value="ajustes" class="cx-entrada">(6). Criação de Contas</option>
                            <option value="ajustes" class="cx-entrada">(7). Alteração de Nomes, Senhas, Desvios de Ramais</option>
                            <option value="solicitacao-insumos" class="cx-entrada">(8). Solicitação de Insumos (Aparelho IP, Fontes POE, Cabos de Rede, Fone de Ouvido)</option>
                        </select> `;


const categoriaServico = document.getElementById('categoriaServico');
const containerProcedimentos = document.getElementById('container-procedimentos');
const adicionarMensagem = document.getElementById('adicionarMensagem');

categoriaServico.addEventListener('click', () => {

    const valorSelecionadoCategoriaServico = categoriaServico.value;
    console.log(valorSelecionadoCategoriaServico);

    if (valorSelecionadoCategoriaServico=="selecione") {
        const containerProblema = document.getElementById('container-problema');
        containerProblema.innerHTML = ``;
        const containerCategoriaProblema = document.getElementById('container-categoria-problema');
        containerCategoriaProblema.innerHTML = ``;
        containerProcedimentos.innerHTML = ``;

    } else if (valorSelecionadoCategoriaServico=="noc") {
        const containerCategoriaProblema = document.getElementById('container-categoria-problema');
        containerCategoriaProblema.innerHTML = categoriaProblema;

        containerCategoriaProblema.addEventListener('click',  () => {
            // Pega opção selecionado pelo Selected
            const categoriaProblema = document.getElementById('categoriaProblema'); 
            const valorSelecionado = categoriaProblema.value;
            console.log(valorSelecionado);
        
            // Pega ID do container onde será montado o conteúdo
            const containerProblema = document.getElementById('container-problema');

            if (valorSelecionado=="selecione") {
                containerProblema.innerHTML = ``;
                containerProcedimentos.innerHTML = ``;
            } else if (valorSelecionado=="nao-faz-chamadas" || valorSelecionado=="nao-faz-nao-recebe-chamadas" || valorSelecionado=="intermitencia-chamadas") {
                containerProblema.innerHTML = amostraDeChamadas;   
            } else if (valorSelecionado=="nao-recebe-chamadas") {
                containerProcedimentos.innerHTML = `<h1>teste</h1>`;
                containerProblema.innerHTML = amostraDeChamadas; 
            } else if (valorSelecionado=="problemas-audio") {
        
            } else if (valorSelecionado=="configuracao-equipamento") {
                containerProblema.innerHTML = configuracaoDeEquipamentos;
            }
        });
    } else if (valorSelecionadoCategoriaServico=="stfc") {

    }
});

adicionarMensagem.addEventListener('click', () => {
            const containerMensagem = document.getElementById('containerMensagem');
            containerMensagem.innerHTML = `<textarea name="ServicoMensagem" rows="10" cols=100 class="cx-entrada"></textarea>`;
        });




