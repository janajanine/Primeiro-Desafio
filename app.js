//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function nomeNaTela(tag, texto) {
  let titulos = document.querySelector(tag);
  titulos.innerHTML = texto;
}

function adicionarAmigo() {
  let campoSortear = document.querySelector("input").value;
  if (campoSortear.trim() !== "") {
    amigos.push(campoSortear);
    console.log(`Amigo adicionado: ${campoSortear}`);
    atualizarLista();
    alert("O campo está vazio. Por favor, preencha novamente:");
  }
}

function atualizarLista() {
  let listaAmigo = document.getElementById("listaAmigo");
  listaAmigo.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
  if (amigos.length === 0) {
    nomeNaTela("h2", "Adicione amigos antes de sortear!");
    return;
  }

  let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");

  resultado.innerHTML = `O seu amigo secreto é ${nomeSorteado}!`;
}
