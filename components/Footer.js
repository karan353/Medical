import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// css
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <section id={styles.footer} className="pt-5">
      <Container>
        <Row>
          <Col lg={4} className="d-flex flex-column align-content-center">
            <h2>Hours of Operation</h2>
            <ul>
              <li>Monday: 9AM – 5PM</li>
              <li>Tuesday: 9AM – 5PM</li>
              <li>Wednesday: 9AM – 5PM</li>
              <li>Thursday: 9AM – 5PM</li>
              <li>Friday: 9AM – 5PM</li>
            </ul>
          </Col>
          <Col lg={8}>
            <Row>
              <Col className="d-flex flex-column">
                <h3>Quick Links</h3>
                <a>Download Referral Form</a>
                <a>Clinical Trials</a>
                <a>Join a Study</a>
                <a>Family Medicine</a>
              </Col>
              <Col className="mx-auto">
                <h3>Contact Us</h3>
                <p>
                  Telephone:
                  <a href="tel:+111111557415">123-123-1234</a>
                </p>
                <p>
                  Fax:
                  <a href="tel:+111111557415">123-123-1234</a>
                </p>
                <p>8888 Random, Unit A3A4</p>
                <p>Toronto, ON Y4U 4Z6</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
