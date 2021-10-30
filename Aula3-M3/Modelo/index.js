const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const filmes = [
  "Capitão América: O primeiro vingador",
  "Capitã Marvel",
  "O Incrivel Hulk",
  "Homem de Ferro",
  "Homem de Ferro 2",
];

app.get("/", (req, res) => {
  res.send("Oi");
});

app.get("/filmes", (req, res) => {
  res.json(filmes);
});

app.get("/filmes/:id", (req, res) => {
  const id = req.params.id - 1; //Como toda lista começa na posição 0 precisamos usar o -1 para igualar com o que o usuário digitar no parâmetro
  const filme = filmes[id];

  //validacao
  if (!filme) {
    res.send("Filme não encontrado");
    return;
  }
  res.send(filme);
});

app.post("/filmes", (req, res) => {
  const filme = req.body.filme; //para pegar os dados de uma informacao so = req.body.<var>

  const id = filmes.length;

  filmes.push(filme);

  res.send(`Filme adicionado com sucesso: ${filme}. ID do filme: ${id}.`);
});

app.put("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;

  const filme = req.body.filme;

  filmes[id] = filme;

  res.send(`Filme ${filme} atualizado com sucesso. ID: ${id}`);
});

app.delete("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;

  delete filmes[id];

  res.send("Filme excluido com sucesso.");
});

app.listen(3000, () => {
  console.log(`App rodando em http://localhost:${port}.`);
});
