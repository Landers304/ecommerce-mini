import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Card,
  Alert,
} from "react-bootstrap";

function OrdersPage() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/customers").then((res) => {
      setCustomers(res.data);
    });
    axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res.data);
    });
    axios.get("http://localhost:5000/orders").then((res) => {
      setOrders(res.data);
    });
  }, [orderSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      customerId: selectedCustomer,
      productId: selectedProduct,
      quantity,
    };

    axios.post("http://localhost:5000/orders", orderData).then(() => {
      setOrderSuccess(true);
      setSelectedCustomer("");
      setSelectedProduct("");
      setQuantity(1);
    });
  };

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-primary fw-bold">Orders Management</h1>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm p-4">
            <h3 className="mb-3 text-secondary">Create New Order</h3>
            {orderSuccess && (
              <Alert variant="success">
                Order successfully placed! 🎉
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Select Customer</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCustomer}
                  onChange={(e) => setSelectedCustomer(e.target.value)}
                  required
                >
                  <option value="">Select a customer</option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select Product</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  required
                >
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} - ${product.price}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  required
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Place Order
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="mb-3 text-secondary">Order List</h3>
          <ListGroup>
            {orders.map((order) => (
              <ListGroup.Item key={order.id} className="mb-3 p-0 border-0">
                <Card className="shadow-sm border-start border-5 border-primary">
                  <Card.Body>
                    <Card.Title className="text-primary fw-bold">
                      Order #{order.id}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      <strong>Customer:</strong> {order.customerId} <br />
                      <strong>Product:</strong> {order.productId} <br />
                      <strong>Quantity:</strong> {order.quantity} <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default OrdersPage;