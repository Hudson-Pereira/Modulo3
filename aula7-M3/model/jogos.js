const mongoose = require("mongoose");

const jogosModel = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  ano: { type: Number, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const Jogo = mongoose.model("Jogos", jogosModel);

module.exports = Jogo; //exporta para mongo
