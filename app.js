//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let resultado = sortearAmigo();

function nomeNaTela(tag, texto) {
  let titulos = document.querySelector(tag);
  titulos.innerHTML = texto;
}
function adicionarAmigo() {
  let campoSortear = document.querySelector("input").value;
  console.log(campoSortear);
}

function atualizacaoLista() {
  let listaAmigo = document.getElementById("listaAmigo");
  listaAmigo.innerHTML = "";
}

function sortearAmigo() {
  let nomeSorteado = amigos[Math.random() * amigos.length];
  let resultado = document.getElementById("resultado");
  resultado = `O seu amigo secreto é ${nomeSorteado}!`;
  if (resultado == nomeSorteado) {
    nomeNaTela("h2", "Você descobriu o nome sorteado!");
  }
}
