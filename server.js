const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// In-memory data (mock database)
let customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' }
];

let products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Phone', price: 499.99 }
];

// Routes for customers
app.get('/customers', (req, res) => {
    res.json(customers);
});

app.get('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('Customer not found');
    res.json(customer);
});

app.post('/customers', (req, res) => {
    const newCustomer = req.body;
    newCustomer.id = customers.length + 1;
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

app.put('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('Customer not found');
    Object.assign(customer, req.body);
    res.json(customer);
});

app.delete('/customers/:id', (req, res) => {
    const index = customers.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Customer not found');
    customers.splice(index, 1);
    res.status(204).send();
});

// Routes for products
app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

app.post('/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    Object.assign(product, req.body);
    res.json(product);
});

app.delete('/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Product not found');
    products.splice(index, 1);
    res.status(204).send();
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});