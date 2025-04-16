import express from "express";

const router = express.Router();

const clientes = [
  { nome: "Érlon Viana", depoimento: "Comprei o Nada e chegou tudo! Incrível, realmente não tem igual!", imagem: "/img/user.png" },
  { nome: "Ricardo Estevam", depoimento: "Produto invisível e de qualidade duvidosa! Recomendo muito, mas não sei o quê!", imagem: "/img/user.png" },
  { nome: "João Vitor", depoimento: "Eu comprei o 'Silêncio Absoluto' e agora não consigo ouvir nada. Mas é um silêncio maravilhoso!", imagem: "/img/user.png" },
];

router.get("/clientes", (req, res) => {
  res.render("clientes", { clientes: clientes });
});

export default router;