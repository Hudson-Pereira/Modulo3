const express = require("express");
const router = express.Router();
const Pessoa = require("./../model/pessoas");
//aula 6
router.get("/", (req, res) => {
  res.status(200).json({ message: "rota pessoas ok" });
});
//aula 6
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
//aula 7
router.get("/listarnome/:nome", async (req, res) => {
  const nome = req.params.nome;
  await Pessoa.findOne({ nome: nome }) //pega pelo item especificado
    .then((pessoa) => {
      console.log(pessoa);
      res.status(200).json(pessoa);
    })
    .catch((err) => {
      res.status(204).json({ message: "Nada encontrado." });
      console.error(err); //nunca devolver na tela
    });

  res.status(200).json({ message: "rota pessoas ok" });
});
//aula 6
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
//aula 7
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  await Pessoa.updateOne({ _id: id }, req.body)
    .then(() => {
      res.status(200).json({ message: "atualizado ok" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "error" });
    });
});
//aula 7
router.delete("/del/:id", async (req, res) => {
  await Pessoa.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "delete ok" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "error" });
    });
});

module.exports = router;
