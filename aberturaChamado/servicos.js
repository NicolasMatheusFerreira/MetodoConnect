// Sessão de categoria de serviços
const containerCategoriaProblema = document.getElementById('container-categoria-problema');
const containerProcedimentos = document.getElementById('container-procedimentos');
const containerProblema = document.getElementById('container-problema');

function categoriaServicos() {

    limparCampos();
    const categoriaServico = document.getElementById('categoriaServico').value;
    console.log(categoriaServico);

    switch (categoriaServico) {
        case "selecione":
            containerCategoriaProblema.innerHTML = ``;
        break;

        case "noc":
            containerCategoriaProblema.appendChild(listaSelecao([{ valor: 'selecione', texto: '-- SELECIONE --' }, { valor: 'nao-faz-chamadas', texto: '(1). (Inoperância Parcial) - Não Faz Chamadas' }, { valor: 'nao-recebe-chamadas', texto: '(2). (Inoperância Parcial) - Não Recebe Chamadas' }, { valor: 'nao-faz-nao-recebe-chamadas', texto: '(3). (Inoperância Total) - Não Faz E Não recebe Chamadas' }, { valor: 'problemas-audio', texto: '(4). Problemas no Áudio das Chamadas (Voz Robótizada, Picotamento de Voz)' }, { valor: 'configuracao-equipamento', texto: '(5). Configuração de Equipamentos' }, { valor: 'ajustes', texto: '(6). Criação de Contas' }, { valor: 'ajustes', texto: '(7). Alteração de Nomes, Senhas, Desvios de Ramais' }, { valor: 'solicitacao-insumos', texto: '(8). Solicitação de Insumos (Aparelho IP, Fontes POE, Cabos de Rede, Fone de Ouvido)' }]));
            containerCategoriaProblema.addEventListener('click', () => {

                const categoriaProblema = document.getElementById('categoriaProblema').value;
                console.log(categoriaProblema);

                if (categoriaProblema == "selecione") {
                    limparCampos();
                } else if (categoriaProblema == "nao-faz-chamadas" || categoriaProblema == "nao-faz-nao-recebe-chamadas") {
                    limparCampos();
                    containerProblema = amostraDeChamadas(containerProblema);
                } else if (categoriaProblema == "nao-recebe-chamadas") {
                    limparCampos();
                    containerProcedimentos.innerHTML = `<h1>teste</h1>`;
                    containerProblema = amostraDeChamadas(containerProblema);
                } else if (categoriaProblema == "solicitacao-insumos") {
                    limparCampos();
                    solicitacaoInsumos();
                }
            });
            break;
        default:
    }
}

function limparCampos() {
    containerProcedimentos.innerHTML = ``;
    containerProblema.innerHTML = ``;
}

function listaSelecao(opcoes) {
    const selectDeDiagnostico = document.createElement('select');
    selectDeDiagnostico.className = "cx-entrada";
    selectDeDiagnostico.id = "categoriaProblema";

    opcoes.forEach(opcao => {
        const opcoes = document.createElement('option');
        opcoes.classList = "cx-entrada";
        opcoes.value = opcao.valor;
        opcoes.text = opcao.texto;
        selectDeDiagnostico.appendChild(opcoes);
    });
    return selectDeDiagnostico;
}
function caixaTexto(a, b, div, legenda) {
    const caixaTexto = document.createElement('input');
    caixaTexto.id = a;
    caixaTexto.className = b;
    caixaTexto.placeholder = legenda;
    div.appendChild(caixaTexto);
}
/*
function tabela() {
    const tabela = document.createElement('tr');
    const linhas = document.createElement('th');
    
    linhas.forEach(linha => {
       linha.appendChil
    });
    tabela.appendChild(linhas);
}*/
function amostraDeChamadas(div) {
    
    div.innerHTML = `<label class="modal-text" id="intermitente">Está intermitênte?</label>`;
    div.appendChild(listaSelecao([{valor: 'nao', texto: 'Não'}, {valor: 'sim', texto: 'Sim'}]));

    div.innerHTML += `<table>
            <tr>
                <th>
                        <label for="cenarioA" class="modal-text">Cenário A:
                            <input type="tel" id="numeroOrigem1" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada" required>                                
                            <input type="tel" id="numeroDestino1" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada" required>
                        </label>
                </th>
                <th>
                        <label for="cenarioB" class="modal-text">Cenário B:
                            <input type="tel" id="numeroOrigem2" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada" required>                                
                            <input type="tel" id="numeroDestino2" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada" required>
                        </label>
                </th>
                <th>
                        <label for="cenarioC" class="modal-text">Cenário C:
                            <input type="tel" id="numeroOrigem3" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada" required>                                
                            <input type="tel" id="numeroDestino3" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada" required>
                        </label>
                </th>
            </tr>
        </table`;
    return div;
}

function solicitacaoInsumos() {
    containerProcedimentos.appendChild(listaSelecao([{valor: 'selecione', texto: 'Selecione'}, { valor: 'aparelho-ip', texto: 'Aparelho IP'}, { valor: 'fonte-poe', texto: 'Fonte de Energia' }, { valor: 'cabo-rede', texto: 'Cabo de Rede Patch Cord' }, { valor: 'Fone de ouvido', texto: 'Fone de Ouvido' }]));
    containerProcedimentos.addEventListener('input', () => {
        const valorSelecionado = containerProcedimentos.children[0].value;

        if (valorSelecionado == 'aparelho-ip' || valorSelecionado == 'fonte-poe')
            console.log('Equipamento Queimado?');
        else if (valorSelecionado == 'fonte-poe' || valorSelecionado == 'cabo-rede')
            console.log('Equipamento Quebrado');
    });

    const campos = ['CEP', 'Rua', 'Nº', 'Bairro', 'Cidade', 'Estado'];
    campos.forEach(campo => {
        caixaTexto('teste', 'cx-entrada', containerProblema, campo);
    });
}