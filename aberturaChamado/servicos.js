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
            containerCategoriaProblema.addEventListener('input', () => {

                const categoriaProblema = document.getElementById('categoriaProblema').value;
                console.log(categoriaProblema);

                limparCampos();
                if (categoriaProblema == "selecione") {
                } else if (categoriaProblema == "nao-faz-chamadas" || categoriaProblema == "nao-faz-nao-recebe-chamadas") {
                    containerProblema = amostraDeChamadas(containerProblema);
                } else if (categoriaProblema == "nao-recebe-chamadas") {
                    containerProcedimentos.innerHTML = `<h1>RECOMENDAÇÃO DE CONTEÚDOS PARA RESOLUÇÃO</h1>`;
                    containerProblema = amostraDeChamadas(containerProblema);
                } else if (categoriaProblema == "solicitacao-insumos") {
                    solicitacaoInsumos();
                }
            });
            break;
        default:
    }
}
function amostraDeChamadas(div) {
    
    div.innerHTML = `<label class="modal-text" id="intermitente">Está intermitênte?</label>`;
    div.appendChild(listaSelecao([{ valor: 'nao', texto: 'Não' }, { valor: 'sim', texto: 'Sim' }]));
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
    containerProcedimentos.innerHTML = `<h4>Produto:</h4>`;
    containerProcedimentos.appendChild(listaSelecao([{ valor: 'selecione', texto: 'Selecione' }, { valor: 'aparelho-ip', texto: 'Aparelho IP' }, { valor: 'fonte-poe', texto: 'Fonte de Energia' }, { valor: 'cabo-rede', texto: 'Cabo de Rede Patch Cord' }, { valor: 'Fone de ouvido', texto: 'Fone de Ouvido' }]));
    containerProcedimentos.children[1].addEventListener('input', () => {
        const valorSelecionado = containerProcedimentos.children[1].value;
        console.log(valorSelecionado);

        if (valorSelecionado == 'aparelho-ip') {
            containerProcedimentos.innerHTML += `<h4>Configuração  de Rede</h4>`;

            containerProcedimentos.appendChild(listaSelecao([{ valor: 'selecione', texto: 'Selecione' },{ valor: 'dhcp', texto: 'DHCP' }, {valor: 'ip-fixo', texto: 'IP Fixo'}]));
            console.log(containerProcedimentos);
            containerProcedimentos.children[3].addEventListener('input', () => {
                const valorSelecionado = containerProcedimentos.children[3].value;
                
                if (valorSelecionado=='ip-fixo') {
                    console.log('ipfixo');
                } 
            });
        } else if (valorSelecionado == 'fonte-poe' || valorSelecionado == 'cabo-rede')
            console.log('Equipamento Quebrado');
    });

    const campos = [{valor: 'cep', texto: 'CEP'}, {valor: 'rua', texto: 'Rua'}, {valor: 'num', texto: 'Nº'}, {valor: 'bairro', texto: 'Bairro'}, {valor: 'cidade', texto: 'Cidade'}, {valor: 'estado', texto: 'Estado'}];
    containerProblema.innerHTML = `<h4>Endereço:</h4>`;
    campos.forEach(campo => {
         caixaTexto('cx-entrada', containerProblema, campo);
    });
}
function aberturaChamado() {
    console.log(teste);
    validaCampos(nome.value, email.value, telefone.value, celular.value);

    const nome = document.getElementById('nome');
    navigator.clipboard.writeText(nome.value);
    console.log('copiado');
}