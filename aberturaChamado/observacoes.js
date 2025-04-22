var controle = true;

function campoMensagem() {
    if (controle)
        criarCaixaObservacoes();
    
    const adicionarMensagem = document.getElementById('adicionarMensagem');
    adicionarMensagem.classList = "bi bi-dash-circle-fill";
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
}


