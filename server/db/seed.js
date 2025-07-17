import db from "../db.js";

const seedDatabase = () => {
  const dropSales = `DROP TABLE IF EXISTS sales;`;
  const dropProducts = `DROP TABLE IF EXISTS products;`;

  const createProductsTable = `
    CREATE TABLE IF NOT EXISTS products (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      barcode VARCHAR(100) UNIQUE,
      price DECIMAL(10, 2),
      stock INT
    );
  `;

  const createSalesTable = `
    CREATE TABLE IF NOT EXISTS sales (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      product_id INT UNSIGNED,
      quantity INT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );
  `;

  const insertProducts = `
    INSERT IGNORE INTO products (name, barcode, price, stock) VALUES
      ('T-Shirt', '1234567890123', 19.99, 100),
      ('Jeans', '2345678901234', 49.99, 50),
      ('Sneakers', '3456789012345', 89.99, 25);
  `;

  db.query(dropSales, () => {
    db.query(dropProducts, () => {
      db.query(createProductsTable, (err) => {
        if (err) throw err;
        console.log("✅ Products table created.");

        db.query(createSalesTable, (err) => {
          if (err) throw err;
          console.log("✅ Sales table created.");

          db.query(insertProducts, (err) => {
            if (err) throw err;
            console.log("✅ Sample products inserted.");
            process.exit();
          });
        });
      });
    });
  });
};

seedDatabase();
