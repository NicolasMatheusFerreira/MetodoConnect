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
function caixaTexto(classe, div, legenda) {
    const caixaTexto = document.createElement('input');
    caixaTexto.className = classe;
    caixaTexto.id = legenda.valor;
    caixaTexto.placeholder = legenda.texto;
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