import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// css
import styles from "../styles/components/Why_Us.module.css";

// icons
import { IoNewspaperOutline } from "react-icons/io5";
import { BiCubeAlt } from "react-icons/bi";
import { MdPhotoLibrary } from "react-icons/md";

const Why_Us = () => {
  return (
    <section id="why_us" className="why_us">
      <Container>
        <Row>
          <Col lg={4} className="d-flex align-items-stretch my-2">
            <div className={styles.content}>
              <h3>Why Choose Medical?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <div className="text-center">
                <a href="#" className="more-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={8} className="d-flex align-self-center align-items-stretch">
            <div className={styles.icon_boxes}>
              <Row>
                <Col xl={4} className="d-flex align-items-stretch mb-2">
                  <div className={styles.icon_box}>
                    <div className="mt-4 mt-xl-0">
                      <IoNewspaperOutline size={50} className="m-2" />
                      <h4>Corporis voluptates sit</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xl={4} className="d-flex align-items-stretch mb-2">
                  <div className={styles.icon_box}>
                    <div className="mt-4 mt-xl-0">
                      <BiCubeAlt size={50} className="m-2" />
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xl={4} className="d-flex align-items-stretch mb-2">
                  <div className={styles.icon_box}>
                    <div className="mt-4 mt-xl-0">
                      <MdPhotoLibrary size={50} className="m-2" />
                      <h4>Labore consequatur</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Why_Us;
