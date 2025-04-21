var  op = true;

function campoMensagem() {
    const adicionarMensagem = document.getElementById('adicionarMensagem');

    if (op==1) {
        adicionarMensagem.classList = "bi bi-dash-circle-fill";
        op = 0;
    }
    
    if (op==0) {
        adicionarMensagem.classList=="bi bi-plus-circle-fill";
        op = 1;
    }
    
    const containerMensagem = document.getElementById('containerMensagem');
    containerMensagem.classList = 'legenda';
    containerMensagem.innerHTML = `<textarea name="ServicoMensagem" rows="10" cols=100 maxlength=400 id="caixa-texto" class="cx-entrada"></textarea>`;

    const caixaDeTexto = document.getElementById('caixa-texto');

    var cont = 0;
    qtdCaracteres = document.createElement('div');

    caixaDeTexto.addEventListener('input', () => {
        cont++;
        qtdCaracteres.innerHTML = `${cont}`+` Caracteres`;
        containerMensagem.appendChild(qtdCaracteres);
    });
}
