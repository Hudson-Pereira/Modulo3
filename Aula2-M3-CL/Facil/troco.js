const prompt = require("prompt-sync")();

const compra = 100.98;

const pgto = 150.0;

const troco = pgto - compra;

console.log(`Total da compra: ${compra}
             Pagamento: ${pgto}
             Troco: ${Math.round(troco)}`);
