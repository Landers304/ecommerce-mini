import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

function CustomerDetailPage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/customers/${id}`)
      .then((res) => res.json())
      .then((data) => setCustomer(data))
      .catch((err) => console.error("Error fetching customer:", err));
  }, [id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <Container className="my-4">
      <Card>
        <Card.Header>Customer Detail</Card.Header>
        <Card.Body>
          <Card.Title>{customer.name}</Card.Title>
          <Card.Text>Email: {customer.email}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CustomerDetailPage;