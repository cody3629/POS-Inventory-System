import React from "react";
import ProductsPage from "./components/ProductsPage";
import SaleForm from "./components/SaleForm";

export default function App() {
  return (
    <div>
      <h1>Inventory System</h1>
      <ProductsPage />
      <SaleForm />
    </div>
  );
}
