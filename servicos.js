// Sessão de categoria de serviços
const containerProcedimentos = document.getElementById('container-procedimentos');

const categoriaProblema =
    `<select name="categoriaProblema" id="categoriaProblema" class="cx-entrada">
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
                            <input type="tel" id="numeroOrigem1" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada" required>                                
                            <input type="tel" id="numeroDestino1" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada" required>
                    </div>
                </th>
                <th>
                    <div id="cenario2">
                        <label for="cenarioB" class="modal-text">Cenário B:</label><br>
                        <input type="tel" id="numeroOrigem2" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada" required>                                
                        <input type="tel" id="numeroDestino2" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada" required>
                    </div>
                </th>
                <th>
                    <div id="cenario3">
                        <label for="cenarioC" class="modal-text">Cenário C:</label><br>
                        <input type="tel" id="numeroOrigem3" name="numeroOrigem" placeholder="Número de Origem" class="cx-entrada" required>                                
                        <input type="tel" id="numeroDestino3" name="numeroDestino" placeholder="Número de Destino" class="cx-entrada" required>
                    </div>
                </th>
            </tr>
        </table>
    </div>
`;

function servicos() {
    const valorSelecionadoCategoriaServico = categoriaServico.value;
    console.log(valorSelecionadoCategoriaServico);

    if (valorSelecionadoCategoriaServico == "selecione") {
        const containerProblema = document.getElementById('container-problema');

        containerProblema.innerHTML = ``;
        const containerCategoriaProblema = document.getElementById('container-categoria-problema');
        containerCategoriaProblema.innerHTML = ``;
        containerProcedimentos.innerHTML = ``;

    } else if (valorSelecionadoCategoriaServico == "noc") {
        const containerCategoriaProblema = document.getElementById('container-categoria-problema');
        containerCategoriaProblema.innerHTML = categoriaProblema;

        containerCategoriaProblema.addEventListener('click', () => {
            const valorSelecionado = document.getElementById('categoriaProblema').value;
            console.log(valorSelecionado);

            // Pega ID do container onde será montado o conteúdo
            const containerProblema = document.getElementById('container-problema');

            if (valorSelecionado == "selecione") {
                containerProblema.innerHTML = ``;
                containerProcedimentos.innerHTML = ``;
            } else if (valorSelecionado == "nao-faz-chamadas" || valorSelecionado == "nao-faz-nao-recebe-chamadas" || valorSelecionado == "intermitencia-chamadas") {
                containerProblema.innerHTML = amostraDeChamadas;

                const numeroOrigem1 = document.getElementById('numeroOrigem1');
                const numeroDestino1 = document.getElementById('numeroDestino1');

                numeroOrigem1.addEventListener('input', () => {
                    if (validaTelefone(numeroOrigem1.value))
                        numeroOrigem1.style.border = '2px solid rgb(60, 230, 54)';
                    else numeroOrigem1.style.border = '2px solid #e63636';
                });

                numeroDestino1.addEventListener('input', () => {
                    if (validaTelefone(numeroDestino1.value))
                        numeroDestino1.style.border = '2px solid rgb(60, 230, 54)';
                    else numeroDestino1.style.border = '2px solid #e63636';
                });

                const numeroOrigem2 = document.getElementById('numeroOrigem2');
                const numeroDestino2 = document.getElementById('numeroDestino2');

                numeroOrigem2.addEventListener('input', () => {
                    if (validaTelefone(numeroOrigem2.value))
                        numeroOrigem2.style.border = '2px solid rgb(60, 230, 54)';
                    else numeroOrigem2.style.border = '2px solid #e63636';
                });

                numeroDestino2.addEventListener('input', () => {
                    if (validaTelefone(numeroDestino2.value))
                        numeroDestino2.style.border = '2px solid rgb(60, 230, 54)';
                    else numeroDestino2.style.border = '2px solid #e63636';
                });

                const numeroOrigem3 = document.getElementById('numeroOrigem3');
                const numeroDestino3 = document.getElementById('numeroDestino3');

                numeroOrigem3.addEventListener('input', () => {
                    if (validaTelefone(numeroOrigem3.value))
                        numeroOrigem3.style.border = '2px solid rgb(60, 230, 54)';
                    else numeroOrigem3.style.border = '2px solid #e63636';
                });

                numeroDestino3.addEventListener('input', () => {
                    if (validaTelefone(numeroDestino3.value))
                        numeroDestino3.style.border = '2px solid rgb(60, 230, 54)';
                    else numeroDestino3.style.border = '2px solid #e63636';
                });

            } else if (valorSelecionado == "nao-recebe-chamadas") {
                containerProcedimentos.innerHTML = `<h1>teste</h1>`;
                containerProblema.innerHTML = amostraDeChamadas;
            }
        });
    }
}