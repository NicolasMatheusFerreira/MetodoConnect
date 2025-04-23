function limparCampos() {
    containerProcedimentos.innerHTML = ``;
    containerProblema.innerHTML = ``;
}
function listaSelecao(opcoes, classe) {
    const select = document.createElement('select');
    select.className = classe;
    select.id = "categoriaProblema";

    opcoes.forEach(opcao => {
        const opcoes = document.createElement('option');
        opcoes.classList = classe;
        opcoes.value = opcao.valor;
        opcoes.text = opcao.texto;
        select.appendChild(opcoes);
    });
    return select;
}
function caixaTexto(legenda, classe) {
    const caixaTexto = document.createElement('input');
    caixaTexto.className = classe;
    caixaTexto.id = legenda.valor;
    caixaTexto.placeholder = legenda.texto;
    return caixaTexto;
}
function areaTexto() {
    const caixaDeTexto = document.createElement('textarea');
    caixaDeTexto.className = "cx-entrada";
    caixaDeTexto.id = "area-texto";
    caixaDeTexto.maxLength = 300;
    return caixaDeTexto;
}