const prompt = require("prompt-sync")();

function parImpar() {
  const x = parseInt(prompt("Digite um número: "));

  if (x % 2 == 0) {
    console.log(`O número ${x} é PAR.`);
  } else if (x % 2 == 1) {
    console.log(`o número ${x} é IMPAR.`);
  } else {
    console.log("ERROR");
  }
}

parImpar();
