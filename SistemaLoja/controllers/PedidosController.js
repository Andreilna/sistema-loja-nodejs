import express from "express";

const router = express.Router();

router.get("/pedidos", (req, res) => {
  const pedidos = [
    { numero: "001", produto: "Ar Engarrafado Premium", status: "Em Processamento", data: "10/04/2025", valor: "50,00" },
    { numero: "002", produto: "Nada em Pó", status: "Em Espera", data: "12/04/2025", valor: "30,00" },
    { numero: "003", produto: "Botão que Não Faz Nada", status: "Cancelado", data: "14/04/2025", valor: "15,00" },
    { numero: "004", produto: "Silêncio Absoluto", status: "Entregue", data: "16/04/2025", valor: "100,00" },
  ];

  res.render("pedidos", { pedidos: pedidos });
});

export default router;