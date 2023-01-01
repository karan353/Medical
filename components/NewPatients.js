import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import new_member from "../public/img/new_member.webp";

// css
import styles from "../styles/components/NewPatients.module.css";

const NewPatients = () => {
  return (
    <Container className={styles.space}>
      <Row>
        <Col md>
          <div className={styles.img_wrapper}>
            <Image
              className={styles.img}
              src={new_member}
              alt="Picture of doctor listening to lung sounds"
            />
          </div>
        </Col>
        <Col md className={styles.new_patients_section}>
          <h2>Accepting New Patients</h2>
          <p>
            Etiam tincidunt dictum finibus. Phasellus molestie metus justo, ut
            finibus lacus feugiat sed. Vivamus facilisis felis quis magna.
          </p>
          <p className={styles.bold}>
            Please speak with our staff about
            <span className={styles.color}> booking an appointment!</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPatients;
