import express from "express";
import db from "../db/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

export default router;
