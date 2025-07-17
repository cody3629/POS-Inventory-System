import express, { json } from "express";
import cors from "cors";

import productRoutes from "./routes/products.js";
import salesRoutes from "./routes/sales.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());

app.use("/api/products", productRoutes);
app.use("/api/sale", salesRoutes); // see note below

app.get("/", (req, res) => {
  res.send("POS backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
