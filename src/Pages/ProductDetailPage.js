import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container className="my-4">
      <Card>
        <Card.Header>Product Detail</Card.Header>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: ${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetailPage;