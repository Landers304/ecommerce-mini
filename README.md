# Ecommerce Mini Project

This is an Ecommerce Mini project built using React, React Router, and JSON Server for a simulated backend. The project includes features for managing customers, products, and orders.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Features](#project-features)
- [Technologies Used](#technologies-used)
- [License](#license)

## Setup Instructions ##

1. *Clone the Repository*
Clone the repository to your local machine:
```bash
git clone https://github.com/Landers304/ecommerce-mini.git

2. *Install Dependencies for Frontend*
Navigate to the frontend directory and install dependencies:

```bash
cd ecommerce-mini
npm install

3. *Start the Frontend* 
Run the following command to start the frontend server:

```bash
npm start

4. *Install Dependencies for Backend* 
Navigate to the backend directory and install dependencies:
```bash
cd ecommerce-backend
npm install

5. *Start the Backend*
Start the JSON Server to simulate a backend:
```bash
json-server --watch db.json --port 5000

## Usage

- Add new customers and products.
- Create orders by selecting a customer and product.
- All data is saved in-memory via JSON Server (no persistent database).
