import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/CSS/Contact.css'; // Import your custom CSS file

const ContactScreen = () => {
  return (
    <Container fluid className="contact-page">
      <Row className="contact-header">
        <Col>
          <h1>Contact Us</h1>
          <p>Have questions or feedback? We'd love to hear from you!</p>
        </Col>
      </Row>
      <Row className="contact-form">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Type your message here" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
