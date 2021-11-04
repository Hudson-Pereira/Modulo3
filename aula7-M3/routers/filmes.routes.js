const express = require("express");
const router = express.Router();
const Filme = require("./../model/filmes");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota filmes OK" });
});

module.exports = router;
