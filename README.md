# 🧾 POS & Inventory Management System

A simple backend Point of Sale (POS) and inventory tracking system built with Node.js, Express, and MariaDB(MySQL).

## User Story

As a small business owner, I want a point-of-sale system that:

- Gives me full control over my inventory, so I can easily track product levels and sales
- Doesn’t charge recurring fees, so I can keep more of my profits
- Is simple and intuitive, so I don’t need technical expertise to use it
- Provides visibility into product movement and sales history, so I can make informed decisions about my business

This project was inspired by feedback from real small business owners frustrated with expensive, restrictive, or overly complicated POS/Inventory systems. The goal is to create a lightweight, user-friendly, useful option for a flexible POS experience — one that prioritizes usability, transparency, and independence.


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

## Future work
-UI for users
-Enhanced barcode integration
-Website advertising the system and the benefits that come with it

## ⚠️License
This project is public for portfolio and demonstration purposes only.
Do not use, copy, or redistribute this code without explicit permission.
