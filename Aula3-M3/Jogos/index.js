const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const jogos = [{ nome: "God of War", ano: 2008, genero: "Ação" }];

app.get("/", (req, res) => {
  res.send("Ola, bem vindo a lista de jogos.");
});

app.get("/lista", (req, res) => {
  if (Object.keys(jogos).length === 0) {
    res.send("Nada encontrado.");
  }
  res.json(jogos);
});

app.get("/lista/:id", (req, res) => {
  const id = req.params.id - 1;
  const jogo = jogos[id];
  if (!jogo) {
    res.send("Nenhum jogo encontrado.");
    return;
  }

  res.send(jogo);
});

app.post("/inserir", (req, res) => {
  const jogo = req.body; //para pegar os dados de um objeto = req.body

  const id = jogos.length;

  jogos.push(jogo);
  res.send(`Jogo ${jogo.nome} inserido no id ${id}`);
});

app.put("/editar/:id", (req, res) => {
  const id = req.params.id - 1;

  const jogo = req.body;
  jogos[id] = jogo;
  res.send(`Jogo ${jogo.nome} alterado com sucesso.`);
});

app.delete("/lista/:id", (req, res) => {
  const id = req.params.id - 1;

  delete jogos[id];
  res.send("Jogo deletado com sucesso.");
});

app.listen(3000, () => {
  console.log(`Lista de jogos em http://localhost:${port}.`);
});
