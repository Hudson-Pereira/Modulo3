const prompt = require("prompt-sync")();

const ref = 42.54;

const taxa = 10 / 100;

const res = ref + ref * taxa;
console.log(`Valor da compra: ${ref}.`);
console.log(`Valor da taxa de serviço: ${ref * taxa}.`);
console.log(`Valor total: R$ ${res.toFixed(2)}`);
