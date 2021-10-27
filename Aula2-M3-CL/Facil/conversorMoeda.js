const prompt = require("prompt-sync")();
/*
dolar 5,57
euro 6,46
libra esterlina 7,66
dolar canadense 4,49
peso argentino 0,056
peso chileno 0,0069
*/

function converter() {
  const real = parseInt(prompt("Quantos reais você quer converter?"));

  const dolar = real * 5.57;
  const euro = real * 6.46;
  const libra = real * 7.66;
  const dolarC = real * 4.49;
  const pesoA = real * 0.056;
  const pesoC = real * 0.0069;

  console.log(` Convertendo em: 
                Dolar: US$ ${dolar.toFixed(2)}
                Euro: € ${euro.toFixed(2)}
                Libra Esterlina: £ ${libra.toFixed(2)}
                Dolar Canadense: C$ ${dolarC.toFixed(2)}
                Peso Argentino: $ ${pesoA.toFixed(2)}
                Peso Chileno: $ ${pesoC.toFixed(2)}
                `);
}
converter();
