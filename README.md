# 🧾 POS & Inventory Management System

A simple backend Point of Sale (POS) and inventory tracking system built with Node.js, Express, and MariaDB.

## 🚀 Features

- 📦 View all products with current stock
- 🧮 Record sales transactions
- 🛒 Automatically update stock levels after a sale
- 🛠️ RESTful API endpoints for integration with a frontend

## 📂 Project Structure
pos-system/
├── client/ # Frontend (React)
├── server/ # Backend API
│ ├── db.js # DB connection pool
│ ├── server.js # Express server
│ └── .env # Sensitive env variables (ignored from Git)
└── README.md


## 🧪 Endpoints

| Method | Endpoint         | Description                     |
|--------|------------------|---------------------------------|
| GET    | `/api/products`  | Get all products                |
| POST   | `/api/sale`      | Process a product sale          |

## ⚠️License
This project is public for portfolio and demonstration purposes only.
Do not use, copy, or redistribute this code without explicit permission.
