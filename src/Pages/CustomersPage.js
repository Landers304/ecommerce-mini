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
} from "react-bootstrap";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/customers").then((res) => {
      setCustomers(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/customers", formData).then((res) => {
      setCustomers((prev) => [...prev, res.data]);
      setFormData({ name: "", email: "", phone: "", address: "" });
    });
  };

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-primary fw-bold">Customer Management</h1>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <Card className="shadow-sm p-4">
            <h3 className="mb-3 text-secondary">Add New Customer</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter full name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Add Customer
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={7}>
          <h3 className="mb-3 text-secondary">Customer List</h3>
          <ListGroup>
            {customers.map((cust) => (
              <ListGroup.Item key={cust.id} className="mb-3 p-0 border-0">
                <Card className="shadow-sm border-start border-5 border-primary">
                  <Card.Body>
                    <Card.Title className="text-primary fw-bold">
                      {cust.name}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      <strong>Email:</strong> {cust.email || "N/A"} <br />
                      <strong>Phone:</strong> {cust.phone || "N/A"} <br />
                      <strong>Address:</strong> {cust.address || "N/A"}
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

export default CustomersPage;