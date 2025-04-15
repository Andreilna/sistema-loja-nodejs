import express from "express";

const router = express.Router();

router.get("/pedidos", (req, res) => {
    const pedidos = [
      
    ];
  
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
  
  export default router;