const prompt = require("prompt-sync")();

const nasc = +prompt("Digite o ano de nascimento: ");

const ano = 2021;

const idade = ano - nasc;

console.log(`Você tem ${idade} anos e está na flor da idade.`);
