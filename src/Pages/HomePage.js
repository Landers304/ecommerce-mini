import React from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1>Welcome to My E-Commerce</h1>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <img 
              src="/Welcome.jpg" 
              alt="E-Commerce" 
              style={{ maxWidth: "500px", width: "100%", height: "auto" }} 
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Manage your customers, products, and orders all in one place.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button 
              as={Link} 
              to="/customers" 
              variant="primary" 
              size="lg" 
              className="m-2"
            >
              Customers
            </Button>
          </Col>
          <Col>
            <Button 
              as={Link} 
              to="/products" 
              variant="secondary" 
              size="lg" 
              className="m-2"
            >
              Products
            </Button>
          </Col>
          <Col>
            <Button 
              as={Link} 
              to="/orders" 
              variant="success" 
              size="lg" 
              className="m-2"
            >
              Orders
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;