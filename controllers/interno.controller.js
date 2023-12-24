const { connectDb } = require("../database");

const getInterno = async (req, res) => {
  const db = await connectDb();
  const interno = await db.collection("interno").find().toArray();

  res.json(interno);
};


module.exports = {
  getInterno,
};
