const express = require("express");
const router = express.Router();
const Pessoa = require("./../model/pessoas");

router.get("/", (req, res) => {
  res.status(200).json({ message: "rota pessoas ok" });
});

router.get("/listar", async (req, res) => {
  await Pessoa.find({}) //pega tudo do banco
    .then((pessoas) => {
      res.status(200).json(pessoas);
    })
    .catch((err) => {
      res.status(204).json({ message: "Nada encontrado." });
      console.error(err);
    });

  res.status(200).json({ message: "rota pessoas ok" });
});

router.post("/inserir", async (req, res) => {
  await Pessoa.create(req.body) //add novo item ao banco
    .then(() => {
      res.status(200).json({ message: "inserido ok" });
    })
    .catch((err) => {
      res.status(400).json({ message: "error" });
      console.log(err);
    });
});

module.exports = router;
