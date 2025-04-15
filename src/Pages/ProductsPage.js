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

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/products", formData).then((res) => {
      setProducts((prev) => [...prev, res.data]);
      setFormData({ name: "", price: "", description: "" });
    });
  };

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-primary fw-bold">Product Management</h1>
        </Col>
      </Row>

      <Row>
        <Col md={5}>
          <Card className="shadow-sm p-4">
            <h3 className="mb-3 text-secondary">Add New Product</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter product name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Add Product
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={7}>
          <h3 className="mb-3 text-secondary">Product List</h3>
          <ListGroup>
            {products.map((prod) => (
              <ListGroup.Item key={prod.id} className="mb-3 p-0 border-0">
                <Card className="shadow-sm border-start border-5 border-primary">
                  <Card.Body>
                    <Card.Title className="text-primary fw-bold">
                      {prod.name}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      <strong>Price:</strong> ${prod.price || "N/A"} <br />
                      <strong>Description:</strong> {prod.description || "N/A"}
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

export default ProductsPage;