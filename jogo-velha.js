const quadradosJogo = document.querySelectorAll(".quadrado-jogo");
const X = "X";
const O = "O";

function proximoJogador(){
    jogador === "X" ? jogador = "O" : jogador = "X";
    marcarJogadorAtivo(jogador);
}

let jogador = "X";
marcarJogadorAtivo(jogador);

function selecionarArea(posicaoLinha, posicaoColuna) {
    const getText = document.querySelector(`[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`).textContent;
    if(jogador === "X"){
        if(getText === ""){
        desenharSimbolo(X, posicaoLinha, posicaoColuna);
        condicaoVitoria();
        proximoJogador();
    }
    } else {
        if(getText === ""){
        desenharSimbolo(O, posicaoLinha, posicaoColuna);
        condicaoVitoria();
        proximoJogador();
        }
    }
}


function condicaoVitoria(){
    const quadrado = document.querySelectorAll(".quadrado-jogo");
    if(  
        checaQuadrados(quadrado[0], quadrado[1], quadrado[2])  |
        checaQuadrados(quadrado[3], quadrado[4], quadrado[5]) ||
        checaQuadrados(quadrado[6], quadrado[7], quadrado[8]) ||

        checaQuadrados(quadrado[0], quadrado[3], quadrado[6]) ||
        checaQuadrados(quadrado[1], quadrado[4], quadrado[7]) ||
        checaQuadrados(quadrado[2], quadrado[5], quadrado[8]) ||

        checaQuadrados(quadrado[0], quadrado[4], quadrado[8]) ||
        checaQuadrados(quadrado[2], quadrado[4], quadrado[6])

      )
    {
        quadradosJogo.forEach((quadrado) => {quadrado.removeAttribute("onclick");});
            exibirResultado(`O Jogador ${jogador} venceu!`);
    }else{
            chechaTodosQuadrados() ? exibirResultado("Empate!"): '';
    }
}

function chechaTodosQuadrados(){
for(let i in quadradosJogo){
    if(quadradosJogo[i].textContent ===''){
        return false;
    }       
}
        return true;
}

function checaQuadrados(quadrado1, quadrado2, quadrado3){
    if(quadrado1.textContent === quadrado2.textContent && quadrado1.textContent === quadrado3.textContent && quadrado1.textContent !== ""){
        return true;         
    }
        return false;
    }


function reiniciarJogo() {
window.location.reload();
}

//:D