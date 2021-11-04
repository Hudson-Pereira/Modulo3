const mongoose = require("mongoose");

const filmesModel = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  ano: { type: Number },
  elenco: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const Filme = mongoose.model("Filmes", filmesModel);

module.exports = Filme; //exporta para mongo
