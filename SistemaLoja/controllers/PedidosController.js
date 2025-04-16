import express from "express";

const router = express.Router();

router.get("/pedidos", (req, res) => {
  const pedidos = [
    { id: 1, produto: "Ar Engarrafado Premium", status: "Em Processamento", data: "10/04/2025" },
    { id: 2, produto: "Nada em Pó", status: "Em Espera", data: "12/04/2025" },
    { id: 3, produto: "Botão que Não Faz Nada", status: "Cancelado", data: "14/04/2025" },
    { id: 4, produto: "Silêncio Absoluto", status: "Entregue", data: "16/04/2025" },
  ];

  res.render("pedidos", { pedidos: pedidos });
});

export default router;