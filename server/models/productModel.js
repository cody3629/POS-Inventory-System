const db = require("../../db");

async function getAllProducts() {
  const conn = await db.getConnection();
  const rows = await conn.query("SELECT * FROM products");
  conn.release();
  return rows;
}

async function getProductByBarcode(barcode) {
  const conn = await db.getConnection();
  const rows = await conn.query("SELECT * FROM products WHERE barcode = ?", [
    barcode,
  ]);
  conn.release();
  return rows[0];
}

module.exports = {
  getAllProducts,
  getProductByBarcode,
};
