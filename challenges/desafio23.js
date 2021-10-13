db.voos.findOne(
  {
    litrosCombustivel: { $not: { $gt: 1000 }, $exists: true },
  },
  { vooId: true, litrosCombustivel: true, _id: false },
);
