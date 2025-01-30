const express = require("express");
const router = express.Router();
const { client } = require("../config/db");

module.exports = router;
const db = client.db("Green-basket");
const categoryCollection = db.collection("category");

router.get("/categories", async (req, res) => {
  try {
      const categories = await categoryCollection.find().toArray()
      res.send(categories)
  } catch {}
});
