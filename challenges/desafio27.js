db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: 4187,
});

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  { empresa: true, totalVoosDomesticos: true, _id: false },
);
