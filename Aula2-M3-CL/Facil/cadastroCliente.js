const prompt = require("prompt-sync")();
//terminar depois
let qtd = "";
const lista = [];

do {
  const cliente = {};

  cliente.nome = prompt("Informe o nome do cliente: ");
  cliente.idade = prompt("Informe a idade do cliente: ");
  cliente.sexo = prompt("Informe o sexo do cliente: ");

  lista.push(cliente);

  qtd = prompt("Deseja cadastrar mais um cliente?");
} while (qtd.toLowerCase() === "s");
console.log(lista);
