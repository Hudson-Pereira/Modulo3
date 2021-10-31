const express = require("express");

const router = express.Router();

module.exports = router; //exportar rotas
//Itens obrigatorio para usar rotas em app separados...
const jogos = [{ nome: "God of War", ano: 2008, genero: "Ação" }];

router.get("/lista", (req, res) => {
  if (Object.keys(jogos).length === 0) {
    res.status(200).json({ message: "Nada encontrado." });
    return;
  }
  res.status(200).json(jogos);
});

router.get("/lista/:id", (req, res) => {
  const id = req.params.id - 1;
  const jogo = jogos[id];
  if (!jogo) {
    res.status(204).json({ message: "Nenhum jogo encontrado." });
    return;
  }

  res.status(200).json(jogo);
});

router.get("/listar/:nome", (req, res) => {
  const nome = req.params.nome;
  const jogo = jogos.find((item) => item.nome === nome);
  if (!jogo) {
    res.status(204).json({ message: "Nenhum jogo encontrado." });
    return;
  }

  res.status(200).json(jogo);
});

router.get("/list/:nome", (req, res) => {
  const nome = req.params.nome;
  const index = jogos.findIndex((item) => item.nome === nome);
  if (index == -1) {
    res.status(204).json({ message: "Não encontrado." });
    return;
  }
  res.status(200).json(index);
});

router.post("/inserir", (req, res) => {
  const jogo = req.body; //para pegar os dados de um objeto = req.body

  if (
    Object.keys(jogo).length === 0 ||
    !jogo.nome ||
    !jogo.ano ||
    !jogo.genero
  ) {
    res.status(400).json({
      message:
        "Jogo não cadastrado. Por favor, confira os dados inseridos e tente novamente.",
    });
    return;
  } else {
    jogos.push(jogo);
  }

  res
    .status(201)
    .json({ message: `Jogo ${jogo.nome} cadastrado com sucesso.` });
});

router.put("/editar/:id", (req, res) => {
  const id = req.params.id - 1;

  const jogo = req.body;

  if (
    Object.keys(jogo).length === 0 ||
    !jogo.nome ||
    !jogo.ano ||
    !jogo.genero
  ) {
    res.status(400).json({
      message:
        "Jogo não alterado. Por favor, confira os dados inseridos e tente novamente.",
    });
    return;
  } else {
    jogos[id] = jogo;
    res
      .status(200)
      .json({ message: `Jogo ${jogo.nome} alterado com sucesso.` });
  }
});
//praa deletar apenas a info, sem apagar a posicao
router.delete("/lista/:id", (req, res) => {
  const id = req.params.id - 1;

  delete jogos[id];
  res.status(200).json({ message: "Jogo deletado com sucesso." });
});
//para deletar a posicao inteira.
router.delete("/deletar/:id", (req, res) => {
  const id = req.params.id - 1;

  jogos.splice(id, 1);
  res.json(jogos);
});
