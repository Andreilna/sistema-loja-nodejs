import express from "express";

const router = express.Router();

router.get("/produtos", (req, res) => {
  const produtos = [
    { nome: "Ar Engarrafado Premium", preco: "Indisponível", descricao: "Respire estilo. Não contém oxigênio.", imgSrc: "/img/air.png" },
    { nome: "Nada em Pó", preco: "Indisponível", descricao: "Ideal pra quem já se cansou de tudo.", imgSrc: "/img/nothing.png" },
    { nome: "Botão que Não Faz Nada", preco: "Indisponível", descricao: "Clique à vontade. Ele ignora você.", imgSrc: "/img/button.png" },
    { nome: "Nada de Valor", preco: "Indisponível", descricao: "Pague por algo que não vale nada.", imgSrc: "/img/spoon.png" },
    { nome: "Espaço Vazio", preco: "Indisponível", descricao: "Apenas um buraco no espaço-tempo.", imgSrc: "/img/empty.png" },
    { nome: "Silêncio Absoluto", preco: "Indisponível", descricao: "A experiência do nada em sua forma mais pura.", imgSrc: "/img/silence.png" }
  ];

  res.render("produtos", { produtos: produtos });
});

export default router;