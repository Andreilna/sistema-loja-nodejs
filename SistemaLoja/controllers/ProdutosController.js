import express from "express";

const router = express.Router();

router.get("/produtos", (req, res) => {
  const produtos = [
    { nome: "Ar Engarrafado Premium", preco: "R$ 50,00", categoria: "Aéreo", descricao: "Respire estilo. Não contém oxigênio.", imgSrc: "/img/air.png" },
    { nome: "Nada em Pó", preco: "R$ 30,00", categoria: "Pó", descricao: "Ideal pra quem já se cansou de tudo.", imgSrc: "/img/nothing.png" },
    { nome: "Botão que Não Faz Nada", preco: "R$ 10,00", categoria: "Acessórios", descricao: "Clique à vontade. Ele ignora você.", imgSrc: "/img/button.png" },
    { nome: "Nada de Valor", preco: "R$ 5,00", categoria: "Produtos de baixo custo", descricao: "Pague por algo que não vale nada.", imgSrc: "/img/spoon.png" },
    { nome: "Espaço Vazio", preco: "R$ 100,00", categoria: "Espaço", descricao: "Apenas um buraco no espaço-tempo.", imgSrc: "/img/empty.png" },
    { nome: "Silêncio Absoluto", preco: "R$ 150,00", categoria: "Inovação", descricao: "A experiência do nada em sua forma mais pura.", imgSrc: "/img/silence.png" }
  ];

  res.render("produtos", { produtos: produtos });
});

export default router;