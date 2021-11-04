const express = require("express");
const router = express.Router();
const Jogo = require("./../model/jogos");

router.get("/", (req, res) => {
  res.status(200).json({ message: "rota jogos ok" });
});

module.exports = router;
