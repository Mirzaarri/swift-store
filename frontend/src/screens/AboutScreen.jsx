import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../assets/CSS/About.css'; 

const About = () => {
  return (
    <Container fluid className="about-page">
      <Row className="about-header">
        <Col>
          <h1>Welcome to Swift Store</h1>
          <p>Your Destination for Stylish and Seamless Shopping</p>
        </Col>
      </Row>
      <Row className="about-content">
        <Col md={6} className="about-text">
          <h2>Our Story</h2>
          <p>
            At Swift Store, we're more than just an eCommerce platform; we're a community of
            trendsetters and tech enthusiasts. Our journey began with a vision to create a
            one-stop destination for the latest trends and unbeatable deals.
          </p>
          <p>
            Established by a team of passionate individuals, Swift Store is dedicated to
            revolutionizing your online shopping experience. We believe in offering not only
            premium products but also a seamless and secure platform for all your shopping needs.
          </p>
        </Col>
        <Col md={6} className="about-image">
          {/* Replace the URL with an actual image URL */}
          <Image
            src="https://dummyimage.com/600x400/3498db/ffffff&text=Swift+Store"
            alt="Swift Store"
            fluid
          />
        </Col>
      </Row>
      <Row className="about-values">
        <Col>
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Quality:</strong> We curate the finest products to ensure you receive
              top-notch quality with every purchase.
            </li>
            <li>
              <strong>Innovation:</strong> Stay ahead of the curve with our constantly updated
              collections featuring the latest in fashion, technology, and home essentials.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Your happiness is our priority. Our dedicated
              support team is here to assist you at every step of your shopping journey.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
