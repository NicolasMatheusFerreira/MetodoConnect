var controle = true;
const adicionarMensagem = document.getElementById('adicionarMensagem');

function campoMensagem() {
    if (controle)
        criarCaixaObservacoes();
}

function criarCaixaObservacoes() {
    controle = false;
    const containerMensagem = document.getElementById('containerMensagem');
    const areaDeTexto = areaTexto();
    containerMensagem.appendChild(areaDeTexto);

    qtdCaracteres = document.createElement('div');
    qtdCaracteres.classList = "legenda";
    containerMensagem.addEventListener('input', () => {
        qtdCaracteres.innerHTML = `${areaDeTexto.value.length}` + ` Caracteres`;
        containerMensagem.appendChild(qtdCaracteres);
    });

    adicionarMensagem.classList = "bi bi-dash-circle-fill";

    adicionarMensagem.addEventListener('click', () => {

        if (controle==false)
            containerMensagem.remove();
        adicionarMensagem.classList = "bi bi-plus-circle-fill";
     });
}


