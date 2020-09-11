window.onload = function () {

    const corFundo = document.querySelector('#cor-fundo');
    const corTexto = document.querySelector('#cor-texto');
    const tamanhoFonte = document.querySelector('#tamanho-fonte');
    const espacoLinhas = document.querySelector('#espaco-linhas');
    const tipoFonte = document.querySelector('#tipo-fonte');
    const botao = document.querySelector('#botao');
    const texto = document.querySelector('.corpo-texto');

   ( function (){
        texto.style.backgroundColor = localStorage.getItem('corFundo');

        texto.style.color = localStorage.getItem('corTexto');

        texto.style.fontSize = localStorage.getItem('tamanhoFonte') + 'px';

        texto.style.lineHeight = localStorage.getItem('espacoLinhas') + 'px';

        texto.style.fontFamily = localStorage.getItem('tipoFonte');
    })();

    botao.addEventListener('click', function () {
        texto.style.backgroundColor = corFundo.value;
        localStorage.setItem('corFundo', corFundo.value);

        texto.style.color = corTexto.value;
        localStorage.setItem('corTexto', corTexto.value);

        texto.style.fontSize = tamanhoFonte.value + 'px';
        localStorage.setItem('tamanhoFonte', tamanhoFonte.value);

        texto.style.lineHeight = espacoLinhas.value + 'px';
        localStorage.setItem('espacoLinhas', espacoLinhas.value);

        texto.style.fontFamily = tipoFonte.value;
        localStorage.setItem('tipoFonte', tipoFonte.value);
    });
}