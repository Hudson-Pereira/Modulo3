const prompt = require("prompt-sync")();

const nota = parseInt(prompt("Digite a nota do aluno: "));

if (nota > 0 || nota <= 6.0) {
  console.log(`A nota do aluno foi convertida em "F".`);
} else if (nota > 6.0 || nota <= 7.0) {
  console.log(`A nota do aluno foi convertida em "D".`);
} else if (nota > 7.0 || nota <= 8.0) {
  console.log(`A nota do aluno foi convertida em "C".`);
} else if (nota > 8.0 || nota <= 9.0) {
  console.log(`A nota do aluno foi convertida em "B".`);
} else if (nota > 9.0 || nota <= 10.0) {
  console.log(`A nota do aluno foi convertida em "A".`);
} else {
  console.log("ERROR");
}
