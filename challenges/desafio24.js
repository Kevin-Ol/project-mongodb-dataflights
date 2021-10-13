db.voos.findOne(
  {
    litrosCombustivel: { $not: { $gt: 600 }, $exists: true },
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
  },
  { vooId: true, litrosCombustivel: true, "empresa.nome": true, _id: false },
);
