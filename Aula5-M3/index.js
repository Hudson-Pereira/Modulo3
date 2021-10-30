const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ola, bem vindo a lista de jogos." });
});
//rota principal tem que ficar no arquivo index.

const jogosRouter = require("./jogos"); //importar rotas
app.use("/", jogosRouter); // rota principal, rotas secundarias

app.listen(3000, () => {
  console.log(`App rodando em: http://localhost:${port}`);
});
