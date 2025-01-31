const express = require("express");
const router = express.Router();
const { client } = require("../config/db");

module.exports = router;
const db = client.db("Green-basket");
const categoryCollection = db.collection("category");
const productCollection = db.collection("products");

router.get("/categories", async (req, res) => {
  try {
    const categories = await categoryCollection.find().toArray();
    res.send(categories);
  } catch {
    res.send({
      massage: "404",
    });
  }
});
router.get("/popular-products", async (req, res) => {
  try {
    const products = await productCollection.find().toArray();
    res.send(products);
  } catch {
    res.send({
      massage: "404",
    });
  }
});
