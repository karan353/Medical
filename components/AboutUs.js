import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import about_medcare from "../public/img/about_medcare.png";

// css
import styles from "../styles/components/AboutUs.module.css";

const AboutUs = () => {
  return (
    <section id="about us">
      <Container className={styles.space}>
        <Row>
          <Col md className={styles.about_section}>
            <h2>
              MedCare Clinics Is Dedicated To
              <span className={styles.text_header}> Patient-Centred Care </span>
              For The Entire Family.
            </h2>
            <p>
              Etiam mattis malesuada augue, quis mollis ligula. Nullam in tempus
              dolor. Donec vulputate facilisis augue, non ullamcorper urna.
              Etiam ut sapien at eros eleifend blandit eget nec nisi. Sed sit
              amet elementum mi. Donec mattis erat et libero pulvinar consequat.
              Quisque non nulla venenatis, varius lorem et, consequat odio. Nam.
            </p>
            <p className={styles.quote}>
              Ut sodales fringilla velit eu blandit. Nullam sed sapien dui.
              Suspendisse rutrum velit mi, quis fermentum mauris viverra quis.
              Pellentesque enim nulla, dapibus a lacus.
            </p>
          </Col>
          <Col md>
            <div className={styles.img_wrapper}>
              <Image
                className={styles.img}
                src={about_medcare}
                alt="Picture of doctor listening to lung sounds"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
