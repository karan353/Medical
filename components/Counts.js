import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// css
import styles from "../styles/components/Counts.module.css";

// icons
import { Hospital } from "react-bootstrap-icons";
import { TbReportMedical } from "react-icons/tb";
import { FaHospital } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

// import PureCounter from "@srexi/purecounterjs";

const Counts = () => {
  return (
    <section id={styles.counts} className={styles.counts}>
      <Container className="mt-5">
        <Row>
          <Col className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch mb-2">
            <div className={styles.count_box}>
              <div className="d-flex">
                <TbReportMedical color="0d6efd" size={60} />

                <span
                  dataPurecounterStart="0"
                  dataPurecounterEnd="85"
                  dataPurecounterDuration="1"
                  className={styles.purecounter}
                >
                  85
                </span>
              </div>

              <p>
                <strong>Doctors</strong> consequuntur quae qui deca rode
              </p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </Col>

          <Col className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch mb-2">
            <div className={styles.count_box}>
              <div className="d-flex">
                <FaHospital color="0d6efd" size={60} />

                <span
                  dataPurecounterStart="0"
                  dataPurecounterEnd="85"
                  dataPurecounterDuration="1"
                  className={styles.purecounter}
                >
                  26
                </span>
              </div>

              <p>
                <strong>Departments</strong> adipisci atque cum quia aut numquam
                delectus
              </p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </Col>

          <Col className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch mb-2">
            <div className={styles.count_box}>
              <div className="d-flex">
                <FaFlask color="0d6efd" size={60} />

                <span
                  dataPurecounterStart="0"
                  dataPurecounterEnd="85"
                  dataPurecounterDuration="1"
                  className={styles.purecounter}
                >
                  16
                </span>
              </div>

              <p>
                <strong>Research Lab</strong> aut commodi quaerat. Aliquam
                ratione
              </p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </Col>

          <Col className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch mb-2">
            <div className={styles.count_box}>
              <div className="d-flex">
                <FaAward color="0d6efd" size={60} />

                <span
                  dataPurecounterStart="0"
                  dataPurecounterEnd="85"
                  dataPurecounterDuration="1"
                  className={styles.purecounter}
                >
                  150
                </span>
              </div>

              <p>
                <strong>Awards</strong> rerum asperiores dolor molestiae
                doloribu
              </p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Counts;
