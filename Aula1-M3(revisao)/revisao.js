const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");

console.log(`Nome: ${nome}`);

console.log(
  "###################### Lacos FOR em JS ##############################"
);

console.log("######################## forEach ########################");

const frutas = ["maça", "Banana", "Morango"];
console.log(frutas);

console.log("Depois do .push uva");
frutas.push("Uva");
console.log(frutas);

const pos = frutas.indexOf("Banana");
frutas.splice(pos, 1);
console.log("Sem banana");

frutas.forEach(function (fruta, indice) {
  console.log(indice, fruta);
});

console.log("######################## for ########################");

frutas.push("Laranja");

for (let i = 0; i < frutas.length; i++) {
  console.log(`${i} : ${frutas[i]}`);
}

console.log("######################## do While ########################");

let i = 0;

do {
  console.log(i);
  i += 1;
} while (i < 5);

console.log("######################## while ########################");

let o = 0;
while (o < 2) {
  console.log(o);
  o += 1;
}

console.log(
  "######################## for in e for of ########################"
);

for (let i in frutas) {
  console.log("in: ", i);
}

for (let i of frutas) {
  console.log("of: ", i);
}

console.log(
  "############################## Arrow function ########################"
);

frutas.forEach((frutas) => {
  console.log("arrow function: ", frutas);
});

console.log("######################### Objetos ##########################");

const duda = {
  nome: "Maria",
  idade: 17,
  genero: "feminino",
};

console.log(duda.nome); //pra imprimir uma informacao especifica, coloca-se o nome do objeto.indice

duda.escolaridade = "Mestre";

console.log(duda);
