import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Container className="text-center my-5">
      <Row className="justify-content-center align-items-center">
        <Col md={8}>
          <h1 className="display-3 text-danger">404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="mb-4">Oops! The page you're looking for doesn't exist.</p>
          <img
            src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
            alt="Not found"
            className="img-fluid rounded shadow mb-4"
            style={{ maxHeight: "300px" }}
          />
          <div>
            <Link to="/">
              <Button variant="primary">Back to Home</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFoundPage;