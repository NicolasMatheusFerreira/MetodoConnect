function limparCampos() {
    containerProcedimentos.innerHTML = ``;
    containerProblema.innerHTML = ``;
}
function listaSelecao(opcoes, classe) {
    const selectDeDiagnostico = document.createElement('select');
    selectDeDiagnostico.className = classe;
    selectDeDiagnostico.id = "categoriaProblema";

    opcoes.forEach(opcao => {
        const opcoes = document.createElement('option');
        opcoes.classList = classe;
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
function areaTexto() {
    const caixaDeTexto = document.createElement('textarea');
    caixaDeTexto.className = "cx-entrada";
    caixaDeTexto.id = "area-texto";
    caixaDeTexto.maxLength = 200;

    return caixaDeTexto;
}