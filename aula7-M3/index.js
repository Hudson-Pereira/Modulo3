const express = require("express"); //chama express
const app = express(); //

app.use(express.json()); //para express usar json

const Conn = require("./model/conn/index"); //importa arquivo de conexao.

Conn(); //chama funcao de conexao

const port = 3000;

const pessoasRouter = require("./routers/pessoas.routes");
app.use("/pessoas", pessoasRouter);

const jogosRouter = require("./routers/jogos.routes");
app.use("/jogos", jogosRouter);

const filmesRouter = require("./routers/filmes.routes");
app.use("/filmes", filmesRouter);

app.listen(port, () => {
  console.log(`Rodando em: http://localhost:${port} com MongoDB.`);
});
