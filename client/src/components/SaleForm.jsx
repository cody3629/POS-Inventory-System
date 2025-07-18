import { useState } from "react";

export default function SaleForm({ onSaleComplete }) {
  const [barcode, setBarcode] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/sales", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ barcode, quantity: Number(quantity) }),
    });

    const result = await response.json();
    if (response.ok) {
      setMessage("Sale recorded successfully");
      setBarcode("");
      setQuantity(1);
      onSaleComplete();
    } else {
      setMessage(result.error || "Sale failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Record a Sale</h2>
      <input
        type="text"
        placeholder="Product Barcode"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        required
      />
      <button type="submit">Record Sale</button>
      {message && <p>{message}</p>}
    </form>
  );
}
