const prompt = require("prompt-sync")();

function comp(x, y) {
  if (x > y) {
    console.log(`O maior número foi ${x}.`);
  } else if (x < y) {
    console.log(`O maior número foi ${y}.`);
  } else if (x === y) {
    console.log(`Números iguais.`);
  } else {
    console.log("ERROR");
  }
}
const a = parseInt(prompt("Digite o primeiro número: "));
const b = parseInt(prompt("Digite o segundo número: "));
comp(a, b);
