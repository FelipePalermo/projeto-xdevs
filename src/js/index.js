const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    const heUltimoCartao = cartaoAtual === cartoes.length - 1
    if (heUltimoCartao) return;

    esconderCartaoselecionado();

    cartaoAtual++;
    mostrarcartao();
});

btnVoltar.addEventListener("click", function () {

    const ehPrimeiroCartao = cartaoAtual === 0
    if(ehPrimeiroCartao) return;
    
    esconderCartaoselecionado();

    cartaoAtual--;
    mostrarcartao();
});

function mostrarcartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
