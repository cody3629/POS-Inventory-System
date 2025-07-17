import express from "express";
import db from "../db/index.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { barcode, quantity } = req.body;

  db.query(
    "SELECT * FROM products WHERE barcode = ?",
    [barcode],
    (err, results) => {
      if (err || results.length === 0)
        return res.status(400).json({ error: "Product not found" });

      const product = results[0];
      if (product.stock < quantity) {
        return res.status(400).json({ error: "Not enough in stock" });
      }

      db.query("UPDATE products SET stock = stock - ? WHERE id = ?", [
        quantity,
        product.id,
      ]);
      db.query("INSERT INTO sales (product_id, quantity) VALUES (?, ?)", [
        product.id,
        quantity,
      ]);

      res.json({ success: true });
    }
  );
});

export default router;
