const prompt = require("prompt-sync")();

function soma(x, y) {
  return x + y;
}

function menos(x, y) {
  return x - y;
}

function vezes(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

module.exports = {
  soma,
  menos,
  vezes,
  div,
};
