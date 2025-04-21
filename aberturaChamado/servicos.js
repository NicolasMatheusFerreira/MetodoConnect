// Sessão de categoria de serviços
const containerCategoriaProblema = document.getElementById('container-categoria-problema');
const containerProcedimentos = document.getElementById('container-procedimentos');
const containerProblema = document.getElementById('container-problema');

function categoriaServicos() {
    const categoriaServico = document.getElementById('categoriaServico').value;
    console.log(categoriaServico);

    switch (categoriaServico) {
        case "selecione":
            limparCampos();
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
                    containerProblema.innerHTML = amostraDeChamadas;
                } else if (categoriaProblema == "nao-recebe-chamadas") {
                    limparCampos();
                    containerProcedimentos.innerHTML = `<h1>teste</h1>`;
                    containerProblema.innerHTML = amostraDeChamadas;
                } else if (categoriaProblema == "solicitacao-insumos") {
                    limparCampos();
                    containerProcedimentos.appendChild(listaSelecao([{ valor: 'aparelho-ip', texto: 'Aparelho IP' }, { valor: 'fonte-poe', texto: 'Fonte de Energia' }, { valor: 'cabo-rede', texto: 'Cabo Rede Patch Cord' }, { valor: 'Fone de ouvido', texto: 'Fone de Ouvido' }]));
                    caixaTexto('teste', 'cx-entrada', containerProblema);
                }
            });
            break;

        default:
            break;
    }
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

function caixaTexto(a, b, div) {
    const caixaTexto = document.createElement('input');
    caixaTexto.id = a;
    caixaTexto.className = b;
    div.appendChild(caixaTexto);
}

const amostraDeChamadas = `
    <div class="amostraDeChamadas" id="amostraDeChamadas">
        <label class="modal-text">Está intermitênte?
            <select name="categoriaServico" id="categoriaServico" class="cx-entrada">
                <option value="sim" class="cx-entrada">Não</option>
                <option value="nao" class="cx-entrada">Sim</option>
            </select>
        </label>

        <table>
            <tr>
                <th id="cenario1">
                        <label for="cenarioA" class="modal-text">Cenário A:
                            <input type="tel" id="numeroOrigem1" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada" required>                                
                            <input type="tel" id="numeroDestino1" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada" required>
                        </label>
                </th>
                <th id="cenario2">
                        <label for="cenarioB" class="modal-text">Cenário B:
                            <input type="tel" id="numeroOrigem2" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada" required>                                
                            <input type="tel" id="numeroDestino2" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada" required>
                        </label>
                </th>
                <th id="cenario3">
                        <label for="cenarioC" class="modal-text">Cenário C:
                            <input type="tel" id="numeroOrigem3" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada" required>                                
                            <input type="tel" id="numeroDestino3" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada" required>
                        </label>
                </th>
            </tr>
        </table>
    </div>
`;

function limparCampos() {
    containerProcedimentos.innerHTML = ``;
    containerProblema.innerHTML = ``;
}