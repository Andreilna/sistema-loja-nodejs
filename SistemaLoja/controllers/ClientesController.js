import express from "express";

const router = express.Router();

router.get("/clientes", (req, res) => {
  const clientes = [
    {nome: "Érlon Viana", cpf: "123.456.789-00", endereco: "Rua das Laranjeiras, 123 - Registro/SP", depoimento: "Comprei o Nada e chegou tudo! Incrível, realmente não tem igual!", imagem: "/img/user.png"},
    {nome: "Ricardo Estevam", cpf: "987.654.321-00", endereco: "Avenida do Vapor, 456 - Registro/SP", depoimento: "Produto invisível e de qualidade duvidosa! Recomendo muito, mas não sei o quê!", imagem: "/img/user.png"},
    {nome: "João Vitor", cpf: "456.123.789-00", endereco: "Travessa do Silêncio, 789 - Registro/SP", depoimento: "Eu comprei o 'Silêncio Absoluto' e agora não consigo ouvir nada. Mas é um silêncio maravilhoso!", imagem: "/img/user.png"},
  ];

  res.render("clientes", { clientes: clientes });
});

export default router;