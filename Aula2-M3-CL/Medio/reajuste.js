const prompt = require("prompt-sync")();

let sal = parseInt(prompt("Digite o salário do empregado: "));

if (sal <= 280) {
  sal = sal + (sal * 20) / 100;
  console.log(`Novo salário: ${sal}`);
} else if (sal <= 700) {
  sal = sal + (sal * 15) / 100;
  console.log(`Novo salário: ${sal}`);
} else if (sal <= 1500) {
  sal = sal + (sal * 10) / 100;
  console.log(`Novo salário: ${sal}`);
} else if (sal > 1500) {
  sal = sal + (sal * 5) / 100;
  console.log(`Novo salário: ${sal}`);
} else {
  console.log("ERROR");
}
