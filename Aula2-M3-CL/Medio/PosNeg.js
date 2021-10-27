const prompt = require("prompt-sync")();

function tipo() {
  let x = parseInt(prompt("Digite um número: "));

  if (x < 0) {
    console.log(`o número ${x} é negativo.`);
  } else if (x > 0) {
    console.log(`o número ${x} é positivo.`);
  } else if (x == 0) {
    console.log("Número inválido, digite outro número.");
    tipo();
  }
}

tipo();
