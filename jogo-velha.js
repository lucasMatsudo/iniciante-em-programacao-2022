var jogador = null;
var jogadorAtivo = document.getElementById('jogador-ativo');
const TodosOsQuadradosJogo = document.querySelectorAll(".quadrado-jogo");
let acabou = false
let jogadorAtual = X

mudaJogador('X');

quadrado.innerHTML = jogador;
    square.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudaJogador(jogador);

function mudaJogador(valor) {
    jogador = valor;
    jogadorAtivo.innerHTML = jogador;
}

function verificaVitoriaDoJogador(){

    const a1 = document.querySelector(`[data-linha='${1}'][data-coluna='${1}']`);
    const a2 = document.querySelector(`[data-linha='${1}'][data-coluna='${2}']`);
    const a3 = document.querySelector(`[data-linha='${1}'][data-coluna='${3}']`);

    const b1 = document.querySelector(`[data-linha='${2}'][data-coluna='${1}']`);
    const b2 = document.querySelector(`[data-linha='${2}'][data-coluna='${2}']`);
    const b3 = document.querySelector(`[data-linha='${2}'][data-coluna='${3}']`);

    const c1 = document.querySelector(`[data-linha='${3}'][data-coluna='${1}']`);
    const c2 = document.querySelector(`[data-linha='${3}'][data-coluna='${2}']`);
    const c3 = document.querySelector(`[data-linha='${3}'][data-coluna='${3}']`);

    let condicoesDeVitoria= [
        [a1, a2, a3]
        [a1, b1, c1]
        [a1, b3, c3]
        [b1, b2, b3]
        [c1, c2, c3]
        [c1, b2, a3]
        [a2, b2, c2]
        [a3, b3, c3]
    ]
    let posicoesQuadrados = [a1, a2, a3, b1, b2, b3, c1, c2, c3]

function selecionarArea(posicaoLinha, posicaoColuna){
    quadradoJaSelecionado = document.querySelector(`[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`).textContent != ""
    jogoAcabou = acabou == true
    if (jogadorAtual == X) {
        if (quadradoJaFoiSelecionado || jogoAcabou) {
        return
    } else {
        marcaPontoPassaRodada(X, O, posicaoLinha, posicaoColuna)
    }
    } else {
        if (quadradoJaFoiSelecionado || jogoAcabou) {
        return
    } else {
        marcaPontoPassaRodada(O, X, posicaoLinha, posicaoColuna)
    }
}


function reiniciarJogo() {
    window.location.reload();
    }

    }   
}