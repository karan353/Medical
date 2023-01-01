import React from "react";
import { Container } from "react-bootstrap";

// css
import styles from "../styles/components/CTA.module.css";

const CTA = () => {
  return (
    <section id={styles.cta} className={styles.cta}>
      <Container>
        <div className="text-center">
          <h3>In an emergency? Need help now?</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <a className={styles.scrollto} href="#appointment">
            Make an Make an Appointment
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
