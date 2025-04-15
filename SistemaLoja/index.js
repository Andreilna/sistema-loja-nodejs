import express from "express";

const app = express();

import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import ClientesController from "./controllers/ClientesController.js";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", ClientesController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});

///////////

// npm init -y
// npm install [biblioteca]
// node index.js
// npm start
