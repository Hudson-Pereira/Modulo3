const prompt = require("prompt-sync")();
//terminar depois
let qtd = "";
const lista = [];
const obj = {};

do {
  let nome = prompt("Informe o nome do cliente: ");

  lista.push(nome);
  let idade = prompt("Informe a idade do cliente: ");

  lista.push(idade);
  let sexo = prompt("Informe o sexo do cliente: ");

  lista.push(sexo);
  qtd = prompt("Deseja cadastrar mais um cliente?");

  obj.nome = lista[nome];
  obj.idade = lista[idade];
  obj.sexo = lista[sexo];
} while (qtd.toLowerCase() === "s");
console.log(lista);
