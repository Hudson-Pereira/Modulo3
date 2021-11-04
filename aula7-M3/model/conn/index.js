const mongoose = require("mongoose"); //importando mongoose

async function Conn() {
  await mongoose
    .connect("mongodb://localhost:27017/Aula07-M3", {
      //string de conexao com o banco
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      //retorno se tudo certo
      console.log("MongoDB connected...");
    })
    .catch(() => {
      console.log(err); //retorno se tudo errado
    });
}

module.exports = Conn; //exportar a funcao
