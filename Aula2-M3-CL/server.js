const express = require("express"); //importa modulo express
const path = require("path"); //importando path
const app = express(); //instancia uma referencia do express no projeto

const port = 3000; // set port usando a var de ambiente ou a porta 3000.

app.set("view engine", "ejs"); // set engine para trabalhar com EJS

app.use(express.static(path.join(__dirname, "/views/public"))); //set public como raiz
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//criando rota get para index
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

//criando servidor local
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
