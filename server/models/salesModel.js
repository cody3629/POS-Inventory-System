const db = require("../db");

async function createSale(productId, quantity) {
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();
    await conn.query("INSERT INTO sales (product_id, quantity) VALUES (?, ?)", [
      productId,
      quantity,
    ]);
    await conn.query("UPDATE products SET stock = stock - ? WHERE id = ?", [
      quantity,
      productId,
    ]);
    await conn.commit();
    return { success: true };
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}

module.exports = {
  createSale,
};
