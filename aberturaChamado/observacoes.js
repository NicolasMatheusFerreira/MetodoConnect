function campoMensagem() {
    const adicionarMensagem = document.getElementById('adicionarMensagem');
    const containerMensagem = document.getElementById('containerMensagem');
    containerMensagem.classList = 'legenda';
    const caixaDeTexto = document.getElementById('caixa-texto');

    var cont = 0;
    qtdCaracteres = document.createElement('div');

    adicionarMensagem.classList = "bi bi-dash-circle-fill";
    containerMensagem.innerHTML = `<textarea name="ServicoMensagem" rows="10" cols=100 maxlength=400 id="caixa-texto" class="cx-entrada"></textarea>`;

    caixaDeTexto.addEventListener('input', () => {
        cont++;
        qtdCaracteres.innerHTML = `${cont}`+` Caracteres`;
        containerMensagem.appendChild(qtdCaracteres);
    });

    adicionarMensagem.addEventListener('click', () => {
        adicionarMensagem.classList=="bi bi-plus-circle-fill";
        containerMensagem.innerHTML = ``;
    });
}


